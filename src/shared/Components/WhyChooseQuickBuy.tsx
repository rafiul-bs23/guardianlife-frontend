import { Zap, Smartphone, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

type FeatureLocale = {
  id: number;
  title: string;
  description: string;
};

const ICONS = [
  <Zap size={48} strokeWidth={2.5} className="text-[#FDB022]" />,
  <Smartphone size={48} strokeWidth={2.5} className="text-[#2C3E50]" />,
  <Shield size={48} strokeWidth={2.5} className="text-[#E74C3C]" />,
];

export function WhyChooseQuickBuy() {
  const { t } = useTranslation('shared');

  const localizedFeatures = t('why_choose_quick_buy.features', { returnObjects: true });
  const features = Array.isArray(localizedFeatures) ? (localizedFeatures as FeatureLocale[]) : [];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[903px] w-full flex flex-col items-center gap-[20px] bg-white py-8">
        <h2 className="m-0 text-[32px] font-bold text-[#1a1a2e] text-center">
          {t('why_choose_quick_buy.title')}
        </h2>

        <div className="flex items-start justify-between w-full gap-[40px]">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="mb-[8px]">{ICONS[index]}</div>
              <h3 className="m-0 text-[22px] font-bold text-[#1a1a2e]">
                {feature.title}
              </h3>
              <p className="m-0 text-[18px] text-[#666666] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
