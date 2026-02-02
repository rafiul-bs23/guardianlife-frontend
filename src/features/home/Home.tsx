import bannerVideo from "../../assets/video/watermarked_preview.mp4";

const Home = () => {
  return (
    <div>
      <div className="h-[1080px]">
        <video src={bannerVideo} autoPlay muted loop playsInline={true} className="absolute inset-0 h-full w-full object-cover text-transparent"></video>
      </div>
      <div className="p-6 h-12">

        <p className="mt-2 text-gray-600">
          Tailwind is working
        </p>
      </div>
    </div>
  );
};

export default Home;
