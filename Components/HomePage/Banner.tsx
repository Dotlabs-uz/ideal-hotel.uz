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
      className="w-full h-[800px] bg-cover bg-center flex flex-col justify-center text-white px-4 relative"
      style={{ backgroundImage: "url('/BannerImages/receptionTop.png')" }}
    >
      <div className="w-[1260px] flex justify-between mx-auto">
        <div className="absolute bottom-0 right-[150px]">
          <BannerAnim translation={translation} />
        </div>
        <div className="pl-[222px] z-20">
          {/* <p className="text-[20px]">{translation.banner.welcome}</p> */}
          {/* <h1 className="text-[135px] font-bold leading-32">{translation.banner.bannerTxt}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;