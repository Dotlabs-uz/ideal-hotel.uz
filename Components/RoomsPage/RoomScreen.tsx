'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useMemo } from 'react';
import rooms from '@/lib/data/Room.json';
import RoomCard from '../ui/CardRoom';
import Link from 'next/link';

type RoomCategory = 'all' | 'standart' | 'deluxe' | 'lux';

interface numberFond {
  translation: {
    numberFond: {
        numberFond: string;
        enjoyTxt: string;
        seeAll: string;
        all: string;
        standart: string;
        deluxe: string;
        lux: string;
    };
  };
}

const RoomScreen = ({ translation }: numberFond) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const categories: { id: RoomCategory; name: string }[] = [
        { id: 'all', name: translation.numberFond.all || 'Все' },
        { id: 'standart', name: translation.numberFond.standart || 'Standart' },
        { id: 'deluxe', name: translation.numberFond.deluxe || 'Deluxe' },
        { id: 'lux', name: translation.numberFond.lux || 'Lux' },
    ];

    const activeCategory = useMemo(() => {
        return (searchParams.get('category') as RoomCategory) || 'all';
    }, [searchParams]);

    const handleClick = (category: RoomCategory) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', category);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const filteredRooms = rooms.filter(room =>
        activeCategory === 'all' ? true : room.category === activeCategory
    );

    const segments = pathname.split('/');
    const locale = (segments[1] as 'ru' | 'uz' | 'en') || 'ru';

  return (
    <section className="max-w-6xl mx-auto pt-[80px] px-6">
      <div>
        <div className="flex lg:justify-between flex-wrap sm:flex-wrap md:flex-wrap items-start gap-0 md:gap-[10px] lg:gap-0 ">
            <div className="flex w-full justify-center flex-wrap gap-1 lg:gap-4 mb-[15px] lg:mb-12">
                {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleClick(category.id)}
                    className={`text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] px-6 py-2 rounded-[4px] mt-[26px] transition-colors ${
                    activeCategory === category.id
                        ? 'bg-[#17849A] text-white'
                        : 'bg-white text-[#17849A] border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    {category.name}
                </button>
                ))}
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-[20px] md:pb-[50px] lg:pb-[80px]">
            {Array.from({ length: 6 }).map((_, index) => {
                const room = filteredRooms[index];
                return room ? (
                <RoomCard
                    key={room.id}
                    image={room.image}
                    title={room.title[locale]}
                    features={room.features[locale]}
                />
                ) : (
                <div key={index} className="bg-gray-100 rounded-[4px]" />
                );
            })}
        </div>
      </div>
    </section>
  );
}

export default RoomScreen;
