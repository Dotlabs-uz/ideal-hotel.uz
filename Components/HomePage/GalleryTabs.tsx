'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'breakfast',
    label: {
      ru: 'Завтраки и шведский стол',
      uz: 'Nonushta va shved stoli',
      en: 'Breakfast and buffet',
    },
  },
  {
    id: 'restaurant',
    label: {
      ru: 'Ресторан и кухня',
      uz: 'Restoran va oshxona',
      en: 'Restaurant and kitchen',
    },
  },
  {
    id: 'bar',
    label: {
      ru: 'Бар',
      uz: 'Bar',
      en: 'Bar',
    },
  },
  {
    id: 'area',
    label: {
      ru: 'Зона отдыха',
      uz: 'Dam olish zonasi',
      en: 'Recreation area',
    },
  },
];

const images = [
  { id: 1, src: '/images/shved.webp', alt: 'Завтрак', category: 'breakfast' },
  { id: 2, src: '/images/restouran.webp', alt: 'Ресторан', category: 'restaurant' },
  { id: 3, src: '/images/bar.webp', alt: 'Бар', category: 'bar' },
  { id: 4, src: '/images/area.webp', alt: 'Зона отдыха', category: 'area' },
];

const GalleryTabs = ({
  lang,
  translation,
}: {
  lang: 'ru' | 'uz' | 'en';
  translation: {
    services: {
        servic: string,
        breackfast: string,
        breackfastTxt: string
    };
  };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('services') || 'breakfast';

  const handleClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('services', id);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const filteredImages = images.filter(img => img.category === activeCategory);

  return (
    <div className=" lg:pt-[80px] px-3 lg:px-6">
        <div className="flex text-center gap-0 md:gap-5 sm:text-left lg:gap-[20px] flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap mb-[20px] md:mb-[30px] lg:mb-[50px]">
            <h2 style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}}
              className="w-full sm:w-fit  text-[16px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-light text-[#17849A]">
                {translation.services.servic}
            </h2>
            <div className="">
                <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-15 lg:text-[64px] font-bold mb-0 sm:mb-[10px] md:mb-[17px] lg:mb-[27px] text-[#17849A]">
                    {translation.services.breackfast}
                </h2>
                <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
                  className="text-[#00232A] my-3 md:my-0 lg:my-0 max-w-[600px] font-light text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                    {translation.services.breackfastTxt}
                </p>
            </div>
        </div>
        <div style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
        className="relative grid grid-cols-2 sm:grid-cols-4 gap-2">
          {categories.map(category => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleClick(category.id)}
                className={clsx(
                  'relative px-6 py-2 cursor-pointer max-w-[275px] rounded-[4px] text-[12px] md:text-[14px] lg:text-[18px] transition-colors',
                  isActive ? 'text-white' : 'text-gray-800'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-[#007b7f] rounded-[4px] z-[-1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {category.label[lang]}
              </button>
            );
          })}
        </div>

      <div className="relative w-full h-[500px]">
        <AnimatePresence mode="wait">
          {filteredImages.map((image) => (
            <motion.div
              key={activeCategory} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-[4px]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default GalleryTabs;
