import Button from './Button';

interface AppStoreButtonsProps {
    className?: string;
}

const AppStoreButtons = ({ className = '' }: AppStoreButtonsProps) => {
    return (
        <div className={` ${className}`}>
            <Button
                label="Google Play"
                variant="solid-orange"
                href="https://play.google.com/store/apps/details?id=com.bs23.myGuardian.guardian_app"
            />
            <Button
                label="App Store"
                href="https://apps.apple.com/us/app/guardian-life/id6741193237"
            />
        </div>
    );
};

export default AppStoreButtons;
