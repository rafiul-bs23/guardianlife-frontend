import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

type Illness = {
  id: number;
  name: string;
};

export function CriticalIllnessList({ items }: { items: Illness[] }) {
  const isMobile = useIsMobile();
  const vp = { once: true, amount: isMobile ? 0.1 : 0.15 } as const;

  return (
    <div className="w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="m-0 mb-[16px] text-[15px] font-bold text-[#1a1a2e]"
      >
        Covered Critical Illnesses ({items.length}):
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px]">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
            className="font-normal bg-white rounded-[8px] px-[14px] py-[10px] flex items-center text-[20px] leading-[32px] tracking-[0.02em] min-h-[67px] w-full"
          >
            {item.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
