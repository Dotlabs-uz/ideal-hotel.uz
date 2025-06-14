'use client'

import { useState } from "react";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/Components/ui/drawer";
import Link from "next/link";

type CardData = {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
  amenities: string[];
  amenities2: string[];
  thumbnails: string[];
};
type Translation = {
  modal: {
    txt: string;
    btn: string;
  };
};

type CardDrawerProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  card: CardData;
  translation: Translation;
};

const CardDrawer = ({ open, onOpenChange, card, translation }: CardDrawerProps) => {
  if (!card) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? card.images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === card.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[95vh] rounded-t-[16px] lg:p-10">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-5 right-5 z-50 hover:opacity-70"
        >
          <Image src="/images/icon/exit.png" alt="Close" width={32} height={32} />
        </button>
        <div className="h-full overflow-y-auto p-5 lg:p-10 pr-6">

            <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col lg:w-1/2 space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-[4px]">
                {/* <img
                    src={card.images[currentIndex]}
                    alt={card.title}
                    className="w-full h-full object-cover"
                /> */}
                <Image
                  src={card.images[currentIndex]}
                  alt={card.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  priority
                />
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2"
                    onClick={showPrev}
                >
                    <Image src="/images/icon/modalBack.png" alt="Previous" width={30} height={30} />
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2"
                    onClick={showNext}
                >
                    <Image src="/images/icon/modalNext.png" alt="Next" width={30} height={30} />
                </button>
                </div>

                <div className="hidden lg:grid grid-cols-3 gap-3">
                {card.images.map((img, idx) => (
                    // <img
                    // key={idx}
                    // src={img}
                    // alt={`preview-${idx}`}
                    // className={`rounded-[4px] object-cover w-full cursor-pointer border-2 h-[120px] transition-all duration-200 ${
                    //     currentIndex === idx ? 'border-[#00748E]' : 'border-transparent'
                    // }`}
                    // onClick={() => setCurrentIndex(idx)}
                    // />
                    <Image
                      key={idx}
                      src={img}
                      alt={`preview-${idx}`}
                      width={160}
                      height={120}
                      className={`rounded-[4px] object-cover w-full cursor-pointer border-2 h-[120px] transition-all duration-200 ${
                        currentIndex === idx ? 'border-[#00748E]' : 'border-transparent'
                      }`}
                      placeholder="blur"
                      blurDataURL="/images/placeholder.jpg"
                      onClick={() => setCurrentIndex(idx)}
                    />
                ))}
                </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
                <DrawerHeader>
                <DrawerTitle className="text-[28px] md:text-[48px] lg:text-[64px] text-[#00748E]">
                    {card.title}
                </DrawerTitle>
                </DrawerHeader>
                <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-[#000] text-sm md:text-base">{card.features.join(' | ')}</p>
                <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="text-[#00232A] text-sm md:text-base">{card.description}</p>
                <Link href="https://www.booking.com/hotel/uz/ideal.ru.html?aid=356980&label=gog235jc-1FCAso7gFCBWlkZWFsSCFYA2juAYgBAZgBIbgBB8gBDNgBAegBAfgBAogCAagCA7gCtOGPwgbAAgHSAiQxZWNkM2YwOC03YmU0LTQxNjgtOTlkMS1kYjc2ZDg4NGYyZWXYAgXgAgE&sid=8136d488b6369e48ce8df4ee8b85941e&dest_id=-2578646&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749283004&srpvid=041937da0ab300a7&type=total&ucfs=1&" target="_blank" rel="noopener noreferrer">
                  <button style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="bg-[#00748E] text-white px-10 py-3 rounded-[4px] hover:opacity-90">
                    {translation.modal.btn}
                  </button>
                </Link>

                <div>
                <h3 style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="text-lg text-[#00748E]">{translation.modal.txt}</h3>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <ul style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="list-disc list-inside space-y-1">
                    {card.amenities?.map((item, idx) => (
                        <li key={`amenity-${idx}`}>{item}</li>
                    ))}
                    </ul>
                    <ul style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="list-disc list-inside space-y-1">
                    {card.amenities2?.map((item, idx) => (
                        <li key={`amenity2-${idx}`}>{item}</li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CardDrawer;
