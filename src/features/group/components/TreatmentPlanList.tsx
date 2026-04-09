import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

type TreatmentPlan = {
  id: number;
  title: string;
  description: string;
  bulletPoints?: string[];
};

export function TreatmentPlanList({ items }: { items: TreatmentPlan[] }) {
  const isMobile = useIsMobile();
  const vp = { once: true, amount: isMobile ? 0.1 : 0.2 } as const;

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
          className="bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
        >
          <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em]">
            {plan.title}
          </p>
          <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
            {plan.description}
          </p>
          {plan.bulletPoints && (
            <ul className="m-0 mt-[12px] p-0 flex flex-col gap-[8px] list-none">
              {plan.bulletPoints.map((point, pIndex) => (
                <motion.li
                  key={pIndex}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: (index * 0.12) + 0.15 + pIndex * 0.06 }}
                  className="flex items-center gap-[10px] text-[20px]"
                >
                  <span className="w-[20px] h-[20px] rounded-full bg-[#E8823A] flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}
