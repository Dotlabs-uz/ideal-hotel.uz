'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import reviews from '@/lib/data/reviews.json';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface Props {
  translation: {
    guest: {
        reviews: string
    }
  };
}

export default function GuestReviews({ translation }: Props) {
  const sliderRef = useRef(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as 'ru' | 'uz' | 'en' || 'ru';
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.2,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 920px)': {
        slides: { perView: 2.2, spacing: 16 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1.5, spacing: 12 },
      },
    },
  });

  return (
    <section className="px-3 lg:px-6 py-0 lg:py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#17849A] text-3xl font-bold">{translation.guest.reviews}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => slider.current?.prev()}
            className="p-2 bg-[#17849A] text-white rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="p-2 bg-[#17849A] text-white rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div ref={sliderInstanceRef} className="keen-slider overflow-visible">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-[#F8F8F8] p-[27px] w-[100px] my-3 rounded-[8px]"
            style={{ boxShadow: '0 3px 10px 0 gray' }}
          >
            <div className="flex items-center gap-1 mb-[10px]">
                <Image src="/review/avatar.png" alt='photo' width={50} height={50} className='w-[30px] md:w-[40px] lg:w-[50px]' />
                <div className="">
                    <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 600}} className="text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] font-semibold">{review.name}</p>
                    <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="text-[#000000] text-[10px] md:text-[11px] lg:text-[12px] font-medium">{review.date[locale]}</p>
                </div>
            </div>
            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="text-[10px] md:text-[12px] lg:text-[14px]">"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
