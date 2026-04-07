import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

type MaternityItem = {
  id: number;
  label: string;
};

export function MaternityBenefits({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: MaternityItem[];
}) {
  const isMobile = useIsMobile();
  const vp = { once: true, amount: isMobile ? 0.1 : 0.2 } as const;

  return (
    <div className="w-full">
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-bold text-[24px] leading-[32px] tracking-[0.02em]"
      >
        {title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="font-normal text-[20px] leading-[32px] tracking-[0.02em] mt-[24px]"
      >
        {description}
      </motion.p>
      <div className="flex flex-col gap-[14px] mt-[38px]">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 + index * 0.08 }}
            className="bg-white rounded-[10px] px-[16px] py-[14px] flex items-center gap-[12px]"
          >
            <span className="w-[20px] h-[20px] rounded-full bg-[#E8823A] flex-shrink-0" />
            <span className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
