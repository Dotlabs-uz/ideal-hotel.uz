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
    <div className="lg:relative w-full lg:h-[600px] bg-[#17849A]">
      {/* Центрированный текст поверх баннера */}
      <div className="pt-[80px] lg:absolute lg:inset-0 flex items-center justify-center z-10">
        <div className="">
            <h2 className="text-white text-[40px] md:text-[60px] lg:text-[88px] font-bold text-center">
            {translation.about.header}
            </h2>
            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-[#fff] text-[16px] md:text-[20px] lg:text-[24px] w-[300px] md:w-[400px] lg:w-[650px] text-center">{translation.about.txt}</p>
        </div>
      </div>

      {/* Фоновая картинка */}
      <Image
        src="/BannerImages/AboutBanner.webp"
        alt="Banner"
        width={1260}
        height={610}
        className="mt-[20px] block lg:absolute lg:top-[80%] lg:left-1/2 lg:-translate-x-1/2 lg:object-cover"
      />
    </div>
  );
};

export default AboutBanner;
