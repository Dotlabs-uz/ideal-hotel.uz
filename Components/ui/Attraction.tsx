'use client';
import { usePathname } from 'next/navigation';
import { attractions } from '@/lib/data/attractions';
import Image from 'next/image';

const Attractions = () => {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as 'ru' | 'uz' | 'en') || 'ru';

  return (
    <section className="max-full mx-auto py-12">
      <div className="overflow-x-auto pb-[10px]">
        <div className="flex gap-5 flex-nowrap">
          {attractions.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F8F8] h-[230px] md:h-[250px] lg:h-[288px] flex-shrink-0 relative p-6 rounded-lg flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <Image src={item.icon} alt='location' width={47} height={46} className='w-[24px] md:w-[35px] lg:w-[46px]' />
                <p className="w-[120px] md:w-[130px] lg:w-[150px] text-[#00232A] text-[12px] md:text-[14px] lg:text-[16px]">
                  {item.title[locale]}
                </p>
              </div>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] w-[160px] md:w-[180px] lg:w-[210px] text-gray-600">
                {item.description[locale]}
              </p>
              <div className="absolute bottom-[12px] left-[24px] text-[10px] md:text-[12px] lg:text-[14px] text-[#000]">
                <div className="flex items-center gap-1 mb-1">
                  <Image src="/images/MapLocation.png" alt='location' width={14} height={14} className='w-[10px] md:w-[12px] lg:w-[14px]' />
                  <span>{item.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src="/images/time.png" alt='map' width={14} height={14} className='w-[10px] md:w-[12px] lg:w-[14px]' />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
