import Image from "next/image";
import { useState } from "react";

type RoomCardProps = {
  image: string;
  title: string;
  underCategories: string,
  features: string[];
  onClick?: () => void;
};

const RoomCard = ({ image, title, features, underCategories, onClick }: RoomCardProps) => {

  return (
    <div className="max-w-[418px] cursor-pointer rounded overflow-hidden relative" 
    onClick={onClick}>
      {/* <img src={image} alt={title} className="w-[209px] sm:w-[260px] md:w-[300px] lg:w-[418px] bg-cover bg-center" /> */}
      <Image
        src={image}
        alt={title}
        width={418} 
        height={280}
        className="w-[209px] sm:w-[260px] md:w-[300px] lg:w-[418px] object-cover rounded"
        placeholder="blur"
        // blurDataURL="/images/placeholder-blur.jpg" 
        blurDataURL="/images/room/juniorSuit/junior_bedroom_home_1.webp" 
      />

      <div className="mt-[13px]">
        <h3 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium text-[#17849A]">{title}</h3>
        <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
          className="text-[#000] text-[10px] lg:text-[14px]">
          {features.join(' | ')}
        </p>
      </div>
      <div className="absolute top-2 left-2">
        <h2 style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
          className="px-[10px] py-[2px] text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] rounded-full bg-[#000]/70 text-white font-medium">{underCategories}</h2>
      </div>
    </div>
  );
};

export default RoomCard;
