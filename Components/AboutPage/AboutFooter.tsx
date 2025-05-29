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

const images = [
  { src: "/About/Cafe.png", alt: "Image 1" },
  { src: "/About/Rest.png", alt: "Image 2" },
  { src: "/About/room.png", alt: "Image 3" },
];

const AboutFooter = ({ translation }: BannerProps) => {
  return (
    <div className="flex flex-col items-center mt-[10px]">
            <div className="my-[20px] md:my-[35px] lg:my-[50px]">
                <h2 className="text-[#17849A] text-[26px] md:text-[32px] lg:text-[38px] leading-10 max-w-[80%] font-medium mx-auto">
                {translation.about.Impression}
                </h2>
                <p className="text-[#534B4F] text-[14px] md:text-[16px] lg:text-[18px] max-w-[80%] mt-2 lg:mt-4 mx-auto">
                {translation.about.impTxt}
                </p>
            </div>
      {/* Контейнер для 3-х картинок из массива */}
      <div className="flex justify-center gap-2 flex-wrap sm:flex-nowrap md:gap-4 lg:gap-8 px-[20px] md:px-[20px] lg:px-[0] mb-[50px]">
        {images.map(({ src, alt }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={345}
            height={436}
            className="object-contain rounded-[4px] w-[345px] "
          />
        ))}
      </div>
    </div>
  );
};

export default AboutFooter;
