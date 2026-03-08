import { useTranslation } from 'react-i18next';
import SharedContactForm from '../../../shared/Components/ContactForm';

const ContactForm = () => {
    const { t } = useTranslation('contact');

    return (
        <SharedContactForm
            channel="contact"
            variant="flat"
            title={t('form.title')}
        />
    );
};

export default ContactForm;
