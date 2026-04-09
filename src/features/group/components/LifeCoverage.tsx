import { motion } from 'framer-motion';
import { useIsMobile } from '../../../shared/hooks/useMediaQuery';

type LifeCoverageType = {
  id: number;
  title: string;
  description: string;
};

export function LifeCoverage({ items }: { items: LifeCoverageType[] }) {
  const isMobile = useIsMobile();
  const vp = { once: true, amount: isMobile ? 0.1 : 0.2 } as const;

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
          className={`rounded-[12px] px-[20px] py-[20px] ${
            index % 2 === 0 ? "bg-[#F5DBCB]" : "bg-[#DADAE4]"
          }`}
        >
          <p className="font-bold text-[24px] leading-[32px] text-center tracking-[0.02em]">
            {item.title}
          </p>
          <p className="font-normal text-[20px] leading-[32px] tracking-[0.02em]">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
