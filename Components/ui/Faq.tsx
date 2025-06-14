'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data/faqs';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface Props {
  translation: {
    faq: {
      faq: string;
      question: string;
    };
  };
}

const FAQ = ({ translation }: Props) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as 'ru' | 'uz' | 'en') || 'ru';

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="px-4 py-[0px] lg:py-16">
      <div className="text-center mb-12">
        <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-[#17849A] text-lg sm:text-xl mb-2">
          {translation.faq.faq}
        </p>
        <h2 className="text-[#17849A] text-3xl sm:text-4xl font-bold">
          {translation.faq.question}
        </h2>
      </div>

      <div className="flex flex-wrap gap-8 items-start">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[48%] border-b border-[#17849A] pb-4"
          >
            <button
              style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}}
              onClick={() => toggle(index)}
              className="w-full cursor-pointer flex justify-between items-center text-left text-[#17849A] font-medium text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
            >
              {item.question[locale]}
              <motion.div
                animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndexes.includes(index) && (
                <motion.p
                  key="content"
                  style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-4 text-[#00232A] text-sm sm:text-base overflow-hidden"
                >
                  {item.answer[locale]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
