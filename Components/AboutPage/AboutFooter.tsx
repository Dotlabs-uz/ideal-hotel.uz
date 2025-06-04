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
  { src: "/About/room.png", alt: "Image 4" },
  { src: "/About/room.png", alt: "Image 5" },
];

const AboutFooter = ({ translation }: BannerProps) => {
  return (
    <div className="flex flex-col items-center mt-[10px] mb-[20px] lg:mb-[50px]">
            <div className="my-[20px] md:my-[35px] lg:my-[50px]">
                <h2 className="text-[#17849A] text-[26px] md:text-[32px] lg:text-[38px] leading-10 max-w-[80%] font-medium mx-auto">
                  {translation.about.Impression}
                </h2>
                <p className="text-[#534B4F] text-[14px] md:text-[16px] lg:text-[18px] max-w-[80%] mt-2 lg:mt-4 mx-auto">
                  {translation.about.impTxt}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-4 w-full max-w-[1280px] mx-auto">
              {images.map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  width={0} 
                  height={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="w-full h-auto rounded-[4px] object-cover"
                />
              ))}
            </div>
    </div>
  );
};

export default AboutFooter;
