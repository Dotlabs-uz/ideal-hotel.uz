'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

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
    id: 'pool',
    label: {
      ru: 'Бассейн',
      uz: 'Hovuz',
      en: 'Pool',
    },
  },
  {
    id: 'spa',
    label: {
      ru: 'Спа и отдых',
      uz: 'Spa va dam olish',
      en: 'Spa and relaxation',
    },
  },
];

const images = [
  { id: 1, src: '/images/shvedTable.png', alt: 'Завтрак', category: 'breakfast' },
  { id: 2, src: '/images/shvedTable.png', alt: 'Ресторан', category: 'restaurant' },
  { id: 3, src: '/images/shvedTable.png', alt: 'Бассейн', category: 'pool' },
  { id: 4, src: '/images/shvedTable.png', alt: 'Спа', category: 'spa' },
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
    <div className="pt-[80px] px-6">
      {/* max-w-[1100px] px-5 mt-[30px] md:mt-[50px] lg:mt-[80px] lg:px-0 mx-auto */}
        <div className="flex text-center gap-0 md:gap-5 sm:text-left lg:gap-[20px] flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap mb-[20px] md:mb-[30px] lg:mb-[50px]">
            <h2 className="w-full sm:w-fit  text-[16px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-light text-[#17849A]">
                {translation.services.servic}
            </h2>
            <div className="">
                <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-15 lg:text-[64px] font-bold mb-0 sm:mb-[10px] md:mb-[17px] lg:mb-[27px] text-[#17849A]">
                    {translation.services.breackfast}
                </h2>
                <p className="text-[#00232A] my-3 md:my-0 lg:my-0 mx-auto max-w-[600px] font-light text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                    {translation.services.breackfastTxt}
                </p>
            </div>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleClick(category.id)}
            className={clsx(
              'px-6 py-2 max-w-[275px] rounded-[4px] transition text-[12px] md:text-[14px] lg:text-[18px]',
              activeCategory === category.id
                ? 'bg-[#007b7f] text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            )}
          >
            {category.label[lang]}
          </button>
        ))}
      </div>

      <div className="">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative w-full h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-[4px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTabs;
