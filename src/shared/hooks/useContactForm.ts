import { useState, useCallback } from 'react';
import { post_lead } from '../api';

interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToPolicy: boolean;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    message?: string;
    agreeToPolicy?: string;
}

export interface UseContactFormResult {
    formData: FormData;
    errors: FormErrors;
    is_loading: boolean;
    success: boolean;
    error: string | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit: () => void;
    reset: () => void;
}

const initial_form: FormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreeToPolicy: false,
};

const validate = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!formData.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone number is required.';
    } else if (!/^01[3-9]\d{8}$/.test(formData.phoneNumber.trim())) {
        errors.phoneNumber = 'Enter a valid 11-digit Bangladeshi phone number (e.g. 01XXXXXXXXX).';
    }

    if (!formData.message.trim()) {
        errors.message = 'Message is required.';
    }

    if (!formData.agreeToPolicy) {
        errors.agreeToPolicy = 'You must agree to the privacy policy.';
    }

    return errors;
};

export const useContactForm = (channel: string): UseContactFormResult => {
    const [formData, set_form_data] = useState<FormData>(initial_form);
    const [errors, set_errors] = useState<FormErrors>({});
    const [is_loading, set_is_loading] = useState(false);
    const [success, set_success] = useState(false);
    const [error, set_error] = useState<string | null>(null);

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

    const handleSubmit = useCallback(async () => {
        const validation_errors = validate(formData);
        if (Object.keys(validation_errors).length > 0) {
            set_errors(validation_errors);
            return;
        }

        set_is_loading(true);
        set_error(null);

        try {
            const response = await post_lead({
                full_name: formData.fullName.trim(),
                email: formData.email.trim(),
                phone: formData.phoneNumber.trim(),
                type: 'lead',
                applying_position: null,
                message: formData.message.trim(),
                channel,
            });

            if (response.success) {
                set_success(true);
                set_form_data(initial_form);
                set_errors({});
            } else {
                set_error(response.message ?? 'Submission failed. Please try again.');
            }
        } catch {
            set_error('An unexpected error occurred. Please try again.');
        } finally {
            set_is_loading(false);
        }
    }, [formData, channel]);

    const reset = useCallback(() => {
        set_form_data(initial_form);
        set_errors({});
        set_success(false);
        set_error(null);
    }, []);

    return { formData, errors, is_loading, success, error, handleChange, handleSubmit, reset };
};
