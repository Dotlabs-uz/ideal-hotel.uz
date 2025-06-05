import Image from "next/image";

type BannerProps = {
  translation: {
    about: {
      header: string;
      txt: string;
      Impression: string;
      impTxt: string;
    };
  };
};

const AboutBanner = ({ translation }: BannerProps) => {
  return (
    <div className="w-full lg:h-[600px] bg-[#17849A]">
      <div className="pt-[80px] flex items-center justify-center z-10">
        <div className="">
            <h2 className="text-white text-[40px] md:text-[60px] lg:text-[88px] font-bold text-center">
            {translation.about.header}
            </h2>
            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-[#fff] text-[16px] md:text-[20px] lg:text-[24px] w-[300px] mx-auto md:w-[400px] lg:w-[650px] text-center">{translation.about.txt}</p>
        </div>
      </div>

      <div className="w-[90%] m-auto aspect-video relative mt-20 bg-cover">
        <Image
          src="/BannerImages/AboutBanner.webp"
          alt="Banner"
          fill
          className="bg-center object-cover"
        />
      </div>
    </div>
  );
};

export default AboutBanner;
