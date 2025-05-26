'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-[20px] lg:py-16">
      <div className="text-center mb-12">
        <p className="text-[#17849A] text-lg sm:text-xl mb-2">У вас трудности?</p>
        <h2 className="text-[#17849A] text-3xl sm:text-4xl font-bold">Частые вопросы</h2>
      </div>

      <div className="flex flex-wrap gap-8 items-start">
  {faqs.map((item, index) => (
    <div
      key={index}
      className="w-full md:w-[48%] border-b border-[#17849A] pb-4"
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center text-left text-[#17849A] font-medium text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
      >
        {item.question}
        {openIndexes.includes(index) ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      {openIndexes.includes(index) && (
        <p className="mt-4 text-[#00232A] text-sm sm:text-base">
          {item.answer}
        </p>
      )}
    </div>
  ))}
</div>

    </section>
  );
};

export default FAQ;
