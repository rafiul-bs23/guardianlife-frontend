import GetInTouch from "../../../assets/images/home/GetInTouch.png";
import ContactForm from '../../../shared/Components/ContactForm';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full mt-16 lg:mt-[140px] px-4 xl:px-0">
      {/* Left: image */}
      <div className="w-full lg:flex-1 rounded-[32px] lg:rounded-tr-[32px] lg:rounded-br-[32px] lg:rounded-tl-none lg:rounded-bl-none h-64 lg:h-[567px] my-auto overflow-hidden">
        <img
          src={GetInTouch}
          alt="GetInTouch"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: form */}
      <div className="w-full lg:flex-1 flex flex-col py-8 lg:py-[62.5px] lg:pl-8 justify-center">
        <ContactForm
          channel="home"
          variant="flat"
          title="Get in touch"
          subtitle="Our team would love to hear from you."
          className="p-6 sm:p-12 lg:p-16 lg:mr-16"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ContactSection;
