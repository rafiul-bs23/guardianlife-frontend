import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

type CoverageItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function CoverageList({ items }: { items: CoverageItem[] }) {
  const isMobile = useIsMobile();
  const vp = { once: true, amount: isMobile ? 0.1 : 0.2 } as const;

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
          className="bg-white rounded-[12px] px-[20px] py-[20px] shadow-[0_1px_6px_rgba(0,0,0,0.08)] flex items-start gap-[12px]"
        >
          <div className="w-[32px] h-[32px] flex flex-shrink-0 items-center justify-center bg-[#f5dbcb] rounded-full">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[24px] leading-[32px] tracking-[0.02em] mb-[8px]">
              {item.title}
            </p>
            <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
