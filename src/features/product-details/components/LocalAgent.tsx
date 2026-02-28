import React from 'react';
import whoGetsYou from '../../../assets/images/productDetails/whoGetsYou.png';
import whoGetsYouMan from '../../../assets/images/productDetails/whoGetsYouMan.png';
import Button from '../../../shared/Components/Button';

const LocalAgent: React.FC<{ productCode: string }> = ({ productCode }) => {
    return (
        <section className="w-full bg-[#EB6925] overflow-hidden relative">
            {/* Shape Background - Adaptive Positioning & Rotation */}
            <img
                src={whoGetsYou}
                alt=""
                className="absolute
                    bottom-[-5%] left-1/2 -translate-x-1/2 w-[80%] lg:w-full h-auto rotate-90 origin-center
                    lg:top-1/2 lg:right-[0] lg:left-auto lg:h-[100%] lg:w-auto lg:rotate-0 lg:-translate-y-1/2 lg:translate-x-0
                    object-contain object-right pointer-events-none z-0"
            />

            <div className="max-w-[1514px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between px-4 lg:px-12 relative z-10">

                {/* Left Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left z-10 py-12 lg:py-24">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl lg:text-[42px] font-bold text-white leading-tight uppercase tracking-tight">
                            GET A LOCAL AGENT WHO GETS YOU
                        </h2>
                        <p className="text-white text-lg lg:text-xl max-w-xl opacity-90 leading-relaxed">
                            There's a Guardian Life agent nearby ready to offer personalized service to fit your specific needs.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto lg:mx-0">

                        <Button
                            label="Buy Through an Agent"
                            variant="solid-white"
                            className="whitespace-nowrap rounded-xl"
                            href={`https://saleslead.myguardianbd.com/lead-form?product_name=${productCode}`}
                        />
                    </div>
                </div>

                {/* Right Side: Agent Image */}
                <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] flex items-end justify-center lg:justify-end overflow-hidden">
                    <img
                        src={whoGetsYouMan}
                        alt="Local Agent"
                        className="relative h-full object-contain object-bottom z-10"
                    />
                </div>

            </div>
        </section>
    );
};

export default LocalAgent;
