'use client';
import { usePathname } from 'next/navigation';
import { services } from '@/lib/data/services';

const Services = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as 'ru' | 'uz' | 'en' || 'ru';

  return (
    <section className="mx-auto py-[20px] lg:py-12">
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((item, index) => (
            <li key={index} className="flex items-center gap-2 p-2 md:p-3 lg:p-4 text-[12px] sm:text-[16px] md:text-[16px] lg:text-[18px] bg-white text-[#00232A]">
                <div className="w-[28px] sm:w-[28px] md:w-[36px] lg:w-[42px] h-[28px] sm:h-[28px] md:h-[36px] lg:h-[42px] rounded-[4px] bg-[#E6E6E6]" />
                    {item[locale]}
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
