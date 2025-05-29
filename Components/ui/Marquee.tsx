'use client';

import Image from "next/image";
import { Locale } from "@/i18n.config";

interface MarqueeBannerProps {
  translation: any;
}

const MarqueeBanner = ({ translation }: MarqueeBannerProps) => {
  const text = translation?.Header?.Marquee || "Специальное предложение! Забронируй номер сейчас и получи скидку 20%!";

  return (
    <div className="relative overflow-hidden bg-[#17849A] text-white py-2">
      <div className="flex whitespace-nowrap animate-marquee gap-5 md:gap-10">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center gap-5 md:gap-10 text-[10px] md:px-[14px]">
            <Image src="/images/icon/sparkle.png" alt="sparkle" width={24} height={24} className="w-3 md:w-4 h-3 md:h-4" />
            <p>{text}</p>
            <Image src="/images/icon/sparkle.png" alt="sparkle" width={24} height={24} className="w-3 md:w-4 h-3 md:h-4" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
