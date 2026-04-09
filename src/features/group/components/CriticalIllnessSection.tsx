import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Contentheader from "../../../shared/Components/Contentheader";
import { CriticalIllnessList } from "./CriticalillnessList";
import { MOCK_CRITICAL_ILLNESS_DATA } from "../api/mockData";
import { useIsMobile } from "../../../shared/hooks/useMediaQuery";

export const CriticalIllnessSection = () => {
    const { t } = useTranslation();
    const isMobile = useIsMobile();

    // Load illnesses from translation
    const localizedIllnesses = t('group:critical_illness_section.illnesses', { returnObjects: true });
    const illnesses = Array.isArray(localizedIllnesses) ? localizedIllnesses : [];

    return (
        <section className="bg-white pb-16 lg:pb-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: isMobile ? 0.1 : 0.15 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-[#F5DBCB] rounded-[30px] lg:rounded-[50px] pb-12 lg:pb-[56px] overflow-hidden"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="pt-12 lg:pt-[80px] mb-10 lg:mb-14 px-4 lg:px-10"
                    >
                        <Contentheader
                            title={t('group:critical_illness_section.header.title')}
                            description={t('group:critical_illness_section.header.description')}
                        />
                    </motion.div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                        >
                            <CriticalIllnessList items={illnesses as any} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                        >
                            <img
                                src={MOCK_CRITICAL_ILLNESS_DATA.imgUrl}
                                alt="image"
                                className="w-full h-auto lg:h-[638px] lg:max-w-[638px] object-cover rounded-[35px]"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
