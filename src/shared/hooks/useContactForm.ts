import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { post_lead } from '../api';

export interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    applyingPosition: string;
    message: string;
    cv: File | null;
    agreeToPolicy: boolean;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    applyingPosition?: string;
    message?: string;
    cv?: string;
    agreeToPolicy?: string;
}

export interface UseContactFormResult {
    formData: FormData;
    errors: FormErrors;
    is_loading: boolean;
    success: boolean;
    error: string | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    reset: () => void;
}

const initial_form: FormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingPosition: '',
    message: '',
    cv: null,
    agreeToPolicy: false,
};

export const useContactForm = (
    channel: string,
    type: 'lead' | 'job' = 'lead',
    initialValues?: Partial<FormData>
): UseContactFormResult => {
    const { t } = useTranslation('shared');

    const get_initial_data = useCallback(() => ({
        ...initial_form,
        ...initialValues,
    }), [initialValues]);

    const [formData, set_form_data] = useState<FormData>(get_initial_data());
    const [errors, set_errors] = useState<FormErrors>({});
    const [is_loading, set_is_loading] = useState(false);
    const [success, set_success] = useState(false);
    const [error, set_error] = useState<string | null>(null);

    const validate = useCallback((formData: FormData, type: 'lead' | 'job'): FormErrors => {
        const errors: FormErrors = {};

        if (!formData.fullName.trim()) {
            errors.fullName = t('contact_form.validation.full_name_required');
        }

        if (!formData.email.trim()) {
            errors.email = t('contact_form.validation.email_required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = t('contact_form.validation.email_invalid');
        }

        const phoneNumber = formData.phoneNumber.trim();
        if (!phoneNumber) {
            errors.phoneNumber = t('contact_form.validation.phone_required');
        } else if (!/^(\+8801|01)[3-9]\d{8}$/.test(phoneNumber)) {
            errors.phoneNumber = t('contact_form.validation.phone_invalid');
        }

        if (type === 'job' && !formData.applyingPosition.trim()) {
            errors.applyingPosition = t('contact_form.validation.applying_position_required');
        }

        if (type === 'job' && !formData.cv) {
            errors.cv = t('contact_form.validation.cv_required');
        }

        if (!formData.message.trim()) {
            errors.message = t('contact_form.validation.message_required');
        }

        if (!formData.agreeToPolicy) {
            errors.agreeToPolicy = t('contact_form.validation.privacy_policy_required');
        }

        return errors;
    }, [t]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value, type } = e.target;
            const checked = (e.target as HTMLInputElement).checked;
            set_form_data((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }));
            set_errors((prev) => ({ ...prev, [name]: undefined }));
        },
        []
    );

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            set_form_data((prev) => ({ ...prev, cv: files[0] }));
            set_errors((prev) => ({ ...prev, cv: undefined }));
        }
    }, []);

    const handleSubmit = useCallback(async () => {
        const validation_errors = validate(formData, type);
        if (Object.keys(validation_errors).length > 0) {
            set_errors(validation_errors);
            return;
        }

        set_is_loading(true);
        set_error(null);

        try {
            const payload = new FormData();

            payload.append('full_name', formData.fullName.trim());
            payload.append('email', formData.email.trim());
            let phone = formData.phoneNumber.trim();
            if (phone.startsWith('0')) {
                phone = '+88' + phone;
            }
            payload.append('phone', phone);
            payload.append('type', type);
            payload.append('message', formData.message.trim());
            type !== 'job' && payload.append('channel', channel);
            type === 'job' && payload.append('applying_position', formData.applyingPosition.trim());

            if (formData.cv) {
                payload.append('file', formData.cv);
            } else {
                payload.append('file', '');
            }

            const response = await post_lead(payload as any);

            if (response.status) {
                set_success(true);
                set_form_data(get_initial_data());
                set_errors({});
            } else {
                set_error(response.message ?? t('contact_form.messages.error_submission_failed'));
            }
        } catch (error) {
            console.log(error);
            set_error(t('contact_form.messages.error_generic'));
        } finally {
            set_is_loading(false);
        }
    }, [formData, channel, type, t, validate, get_initial_data]);

    const reset = useCallback(() => {
        set_form_data(get_initial_data());
        set_errors({});
        set_success(false);
        set_error(null);
    }, [get_initial_data]);

    return { formData, errors, is_loading, success, error, handleChange, handleFileChange, handleSubmit, reset };
};
