import { useTranslation } from "react-i18next";
import Button from './Button';
import AndroidIcon from '../assets/android.svg';
import AppleIcon from '../assets/apple.svg';
interface AppStoreButtonsProps {
    className?: string;
}

const AppStoreButtons = ({ className = '' }: AppStoreButtonsProps) => {
    const { t } = useTranslation('shared');

    return (
        <div className={` ${className}`}>
            <Button
                label={t('app_download.buttons.google_play')}
                variant="solid-orange"
                href="https://play.google.com/store/apps/details?id=com.bs23.myGuardian.guardian_app"
                leadingIcon={AndroidIcon}
                className="w-full sm:w-fit"
            />
            <Button
                label={t('app_download.buttons.app_store')}
                href="https://apps.apple.com/us/app/guardian-life/id6741193237"
                leadingIcon={AppleIcon}
                className="w-full sm:w-fit"
            />
        </div>
    );
};


export default AppStoreButtons;
