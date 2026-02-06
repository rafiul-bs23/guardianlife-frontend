import { ArrowRight } from 'lucide-react';
import ActionButton from "../../../shared/Components/BaseButton.tsx"; // or custom SVG
import AppPromotionImage from "../../../assets/images/home/AppPromotion/AppPromotion.png"

const AppPromotion = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-gray-600 tracking-wide mb-3">
            OUR AMAZING NEW APP
          </h3>

          <h2 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">SEAMLESS INSURANCE AT YOUR FINGERTIPS</span>
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            THE GUARDIAN LIFE APP PUTS HASSLE-FREE COVERAGE IN YOUR HANDS.
            <br/>
            DOWNLOAD NOW ON ANDROID & IOS TO MANAGE YOUR INSURANCE ANYTIME, ANYWHERE.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <ActionButton
            text="Google Play"
            onClick={() => console.log("Google play clicked")}
          />
          <ActionButton
            text="App Store"
            onClick={() => console.log("App store clicked")}
          />
        </div>

        <div className="relative mt-8 flex">
          <div
            className="overflow-hidden mx-auto"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)',
              borderRadius: '24px'
            }}
          >
            <img
              src={AppPromotionImage}
              alt="Guardian Life App"
              className="w-[1520px] h-[579px] object-cover"
            />

            {/* Top-right circle icon (optional) */}
            <div
              className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-gray-700"/>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Image with rounded corners */}
    </div>
)};

export default AppPromotion;