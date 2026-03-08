import { useTranslation } from 'react-i18next';
import type { HeaderData } from '../../../shared/types/header';
import GenericHeader from '../../../shared/Components/GenericHeader';
import Button from '../../../shared/Components/Button';

interface MicroHeaderProps {
    data: HeaderData;
    onScrollToSolutions?: () => void;
    onScrollToContact?: () => void;
}

const MicroHeader: React.FC<MicroHeaderProps> = ({ data, onScrollToSolutions, onScrollToContact }) => {
    const { t } = useTranslation('micro');

    const actions = (
        <>
            <Button
                label={t('header.button_solutions')}
                variant="outline-white"
                onClick={onScrollToSolutions}
            />
            <Button
                label={t('header.button_contact')}
                variant="solid-white"
                onClick={onScrollToContact}
            />
        </>
    );

    return (
        <GenericHeader
            data={data}
            variant="immersive"
            mediaClassName="md:rounded-tr-[120px] md:rounded-bl-[120px] rounded-[10px]"
            actions={actions}
            descriptionClassName='text-black !text-2xl !mb-20'
        />
    );
};

export default MicroHeader;
