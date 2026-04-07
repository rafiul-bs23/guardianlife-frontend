import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Contentheader from "../../../shared/Components/Contentheader";
import { LifeCoverage } from "./LifeCoverage";
import { MOCK_LIFE_COVERAGE_DATA } from "../api/mockData";
import { useIsMobile } from "../../../shared/hooks/useMediaQuery";

export const LifeCoverageSection = () => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();

    // Load coverages from translation
    const localizedCoverages = t('group:life_coverage_section.coverages', { returnObjects: true });
    const coverages = Array.isArray(localizedCoverages) ? localizedCoverages : [];

    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-10 lg:mb-14"
                >
                    <Contentheader
                        title={t('group:life_coverage_section.header.title')}
                        description={t('group:life_coverage_section.header.description')}
                    />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <LifeCoverage items={coverages as any} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                    >
                        <img
                            src={MOCK_LIFE_COVERAGE_DATA.imgUrl}
                            alt="image"
                            className="w-full h-auto lg:h-[554px] lg:max-w-[712px] object-cover rounded-[35px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
