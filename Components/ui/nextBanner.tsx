'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeroRoomsProps {
  translation: {
      numberFond: string;
      subtitle: string;
  };
}

const HeroRooms = ({ translation }: HeroRoomsProps) => {
  const router = useRouter();
  return (
    <section className="relative w-full h-[280px] md:h-[400px] lg:h-[500px] text-white">
      <Image
        src="/BannerImages/nextBanner.webp"
        alt="Rooms Background"
        fill
        className="object-cover"
        priority
      />
    <div className="absolute top-[80px] left-6 md:left-12 md:top-[100px] lg:left-24 lg:top-[130px] z-10">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm md:text-base mb-4"
      >
        <Image
          src="/images/back.png"
          alt="back"
          width={50}
          height={50}
          className="w-[30px] md:w-[40px] lg:w-[50px]"
        />
      </button>
    </div>
      <div className="absolute bottom-[50px] left-6 md:left-12 lg:left-24 z-10">
        <h1 className="text-[36px] md:text-[56px] lg:text-[88px] font-bold mb-2">
          {translation.numberFond}
        </h1>
        <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-[12px] md:text-[18px] lg:text-[24px] w-[300px] md:w-2xl">
          {translation.subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroRooms;
