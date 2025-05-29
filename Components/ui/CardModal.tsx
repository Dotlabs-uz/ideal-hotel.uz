'use client'
import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Locale = 'ru' | 'uz' | 'en';

type TranslatedText = {
  ru: string;
  uz: string;
  en: string;
};

type TranslatedArray = {
  ru: string[];
  uz: string[];
  en: string[];
};

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



type CardModalProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  card: CardData;
};

const CardModal = ({ open, onOpenChange, card }: CardModalProps) => {
  if (!card) return null;
    if (!card) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? card.images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === card.images.length - 1 ? 0 : prev + 1));
  };

  const half = Math.ceil(card.features.length / 2);
  const leftFeatures = card.features.slice(0, half);
  const rightFeatures = card.features.slice(half);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!bg-white w-screen lg:!w-[90%] !max-w-none h-fit rounded-none p-[20px] lg:p-[60px] flex flex-col overflow-y-auto [button[data-dialog-close]]:hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-6 right-6 hover:opacity-70 z-30 bg-white/20 rounded-full"
        >
          <Image src="/images/icon/exit.png" alt="Previous" width={42} height={42} className="w-[24px] md:w-[34px] lg:w-[42px]" />
        </button>

        <div className="">
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 sm:gap-5 lg:gap-10 overflow-y-auto">
          <div className="flex flex-col lg:w-1/2 h-fit space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-[4px]">
              <img
                src={card.images[currentIndex]}
                alt={card.title}
                className="w-full h-full object-cover"
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
                <Image src="/images/icon/modalNext.png" alt="Previous" width={30} height={30} />
              </button>
            </div>

            <div className="hidden lg:grid grid-cols-3 gap-3 ">
              {card.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`preview-${idx}`}
                  className={`rounded-[4px] object-cover w-full cursor-pointer border-2 transition-all duration-200 ${
                    currentIndex === idx ? 'border-[#00748E]' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 h-fit">
              <DialogHeader>
                <DialogTitle className="text-[36px] md:text-[48px] text-left lg:text-[64px] leading-15 text-[#00748E]">
                    {card.title}
                </DialogTitle>
              </DialogHeader>
            <p className="text-[#000] text-[12px] md:text-[14px]">
              {card.features.join(' | ')}
            </p>
            <p className="text-[#00232A] text-[12px] md:text-[14px] lg:text-[16px] ">{card.description}</p>

            <button className="bg-[#00748E] text-white px-[40px] lg:px-[65px] py-[12px] md:py-[15px] rounded-[4px] text-[14px] md:text-[16px] font-light hover:opacity-90">
              Book Now
            </button>

            <div className="hidden lg:block">
                <h3 className="text-[18px] md:text-[21px] lg:text-[24px] text-[#00748E]">Удобства В Номере</h3>
                <div className="grid grid-cols-2 gap-2 mt-2 text-[12px] md:text-[14px] lg:text-[16px]">
                    <ul className="list-disc list-inside space-y-1">
                    {card.amenities.map((item, idx) => (
                        <li key={`amenity-${idx}`}>{item}</li>
                    ))}
                    </ul>
                    <ul className="list-disc list-inside space-y-1">
                    {card.amenities2.map((item, idx) => (
                        <li key={`amenity2-${idx}`}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>

          </div>
        </div>
            <div className="lg:hidden">
                <h3 className="text-[18px] md:text-[21px] lg:text-[24px] text-[#00748E]">Удобства В Номере</h3>
                <div className="grid grid-cols-2 gap-2 mt-2 text-[12px] md:text-[14px] lg:text-[16px]">
                    <ul className="list-disc list-inside space-y-1">
                    {card.amenities.map((item, idx) => (
                        <li key={`amenity-${idx}`}>{item}</li>
                    ))}
                    </ul>
                    <ul className="list-disc list-inside space-y-1">
                    {card.amenities2.map((item, idx) => (
                        <li key={`amenity2-${idx}`}>{item}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardModal

