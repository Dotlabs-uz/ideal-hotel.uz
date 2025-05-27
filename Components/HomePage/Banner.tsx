import BannerAnim from "./BannerAnim";

type BannerProps = {
  translation: {
    banner: {
      welcome: string;
      bannerTxt: string;
      animationTxt: string;
    };
  };
};

const Banner = ({ translation }: BannerProps) => {
  return (
    <div
      className="w-full h-[400px] md:h-[600px] lg:h-[800px] bg-cover bg-center flex flex-col justify-center text-white px-4"
      style={{ backgroundImage: "url('/BannerImages/receptionTop.png')" }}
    >
      <div className="relative h-full max-w-[1200px] w-full flex justify-between items-center mx-auto">
        <div className="absolute bottom-0 right-[20px]">
          <BannerAnim translation={translation} />
        </div>
        <div className="z-20">
          <p className="text-[14px] md:text-[16px] lg:text-[20px]">{translation.banner.welcome}</p> 
          <h1 className="w-[310px] md:w-[600px] lg:w-fit text-[48px] md:text-[80px] lg:text-[135px]  font-bold leading-12 md:leading-20 lg:leading-32">{translation.banner.bannerTxt}</h1> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
