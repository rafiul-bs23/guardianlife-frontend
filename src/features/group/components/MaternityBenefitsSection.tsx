import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MaternityBenefits } from "./MaternityBenefits";
import { MOCK_MATERNITY_DATA } from "../api/mockData";
import { useIsMobile } from "../../../shared/hooks/useMediaQuery";

export const MaternityBenefitsSection = () => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();

    // Load items from translation
    const localizedItems = t('group:maternity_section.items', { returnObjects: true });
    const items = Array.isArray(localizedItems) ? localizedItems : [];

    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] py-12 lg:pb-[65px] px-4 lg:px-10"
                >
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                        >
                            <MaternityBenefits
                                title={t('group:maternity_section.title')}
                                description={t('group:maternity_section.description')}
                                items={items as any}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                        >
                            <img
                                src={MOCK_MATERNITY_DATA.imgUrl}
                                alt="image"
                                className="w-full h-auto lg:h-[507px] lg:max-w-[688px] object-cover rounded-[35px]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
