'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import rooms from '@/lib/data/Room.json';
import RoomCard from '../ui/CardRoom';
import Link from 'next/link';
import CardModal from '../ui/CardModal';
import { mapRoomToCardData } from '@/lib/mapRoomToCardData';
import { motion, AnimatePresence } from 'framer-motion';

type RoomCategory = 'all' | 'standard' | 'superior' | 'junior' | 'quadruple';

interface numberFond {
  translation: {
    numberFond: {
        numberFond: string;
        enjoyTxt: string;
        seeAll: string;
        all: string;
        standard: string;
        superior: string;
        junior: string;
        quadruple: string;
    };
    modal: {
        txt: string,
        btn: string
    }
  };
}

const RoomFund = ({ translation }: numberFond) => {
    const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const categories: { id: RoomCategory; name: string }[] = [
        { id: 'all', name: translation.numberFond.all || 'Все' },
        { id: 'standard', name: translation.numberFond.standard || 'Standard' },
        { id: 'superior', name: translation.numberFond.superior || 'Superior' },
        { id: 'junior', name: translation.numberFond.junior || 'junior' },
        { id: 'quadruple', name: translation.numberFond.quadruple || 'quadruple' },
    ];

    const activeCategory = useMemo(() => {
        return (searchParams.get('category') as RoomCategory) || 'all';
    }, [searchParams]);

    const handleClick = (category: RoomCategory) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', category);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const handleOpenRoom = (room: typeof rooms[0]) => {
        setSelectedRoom(room);
        setOpen(true);
    };

    const filteredRooms = rooms.filter(room =>
        activeCategory === 'all' ? true : room.category === activeCategory
    );

    const segments = pathname.split('/');
    const locale = (segments[1] as 'ru' | 'uz' | 'en') || 'ru';

  return (
    <section className="pt-[20px] lg:pt-[80px] px-3 lg:px-6">
      <div>
        <div className="flex lg:justify-between flex-wrap sm:flex-wrap md:flex-wrap items-start gap-0 md:gap-[10px] lg:gap-0 ">
            <h2 style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}}
                className="lg:block text-[16px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-light text-[#17849A]">
                {translation.numberFond.numberFond}
            </h2>
            <div className="">
                <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-12 font-bold mb-0 sm:mb-[10px] md:mb-[17px] lg:mb-[27px] text-[#17849A]">
                    {translation.numberFond.numberFond}
                </h2>
                <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}}
                    className="text-[#00232A] max-w-2xl mx-auto font-light text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                    {translation.numberFond.enjoyTxt}
                </p>

                <div style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
                    className="relative grid grid-cols-3 mt-[26px] md:flex md:justify-between gap-3 sm:justify-start md:gap-4 mb-[10px] md:mb-12">
                    {categories.map((category) => {
                        const isActive = activeCategory === category.id;
                        return (
                        <button
                            key={category.id}
                            onClick={() => handleClick(category.id)}
                            className={`relative text-[14px] cursor-pointer sm:text-[14px] md:text-[14px] lg:text-[16px] w-full py-2 px-4 rounded-[4px] transition-colors z-10 ${
                            isActive
                                ? 'text-white'
                                : 'text-[#17849A] border border-gray-200 hover:bg-gray-50'
                            }`}
                            style={{
                            backgroundColor: isActive ? 'transparent' : 'white',
                            }}
                        >
                            {isActive && (
                            <motion.div
                                layoutId="categoryHighlight"
                                className="absolute inset-0 z-[-1] rounded-[4px] bg-[#17849A]"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                            )}
                            {category.name}
                        </button>
                        );
                    })}
                </div>

            </div>
            <div className="hidden lg:block text-center">
                <Link
                style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}}
                href={`/${locale}/rooms`}
                className='px-[20px] w-[190px] sm:px-6 py-2 rounded-[4px] text-sm sm:text-base transition-colors bg-white text-[#17849A] border border-[#17849A] hover:bg-gray-50 inline-block text-center'
                >
                {translation.numberFond.seeAll}
                </Link>
            </div>
        </div>
       <div className="hidden lg:grid grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
                {Array.from({ length: 6 }).map((_, index) => {
                const room = filteredRooms[index];
                return room ? (
                    <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                    <RoomCard
                        image={room.image}
                        underCategories={room.underCategories}
                        title={room.title[locale]}
                        features={room.features[locale]}
                        onClick={() => handleOpenRoom(room)}
                    />
                    </motion.div>
                ) : (
                    <div key={index} className="bg-gray-100 rounded-[4px]" />
                );
                })}
            </AnimatePresence>
        </div>
        <div className="overflow-x-auto pb-[10px]">
             <div className="lg:hidden flex gap-6 w-max">
                 {filteredRooms.map((room) => (
                 <div key={room.id} className="min-w-[180px] lg:min-w-[300px]">
                     <RoomCard
                        key={room.id}
                        image={room.image}
                        title={room.title[locale]}
                        underCategories={room.underCategories}
                        features={room.features[locale]}
                        onClick={() => handleOpenRoom(room)}
                     />
                 </div>
                 ))}
             </div>
        </div>
            {selectedRoom && (
                <CardModal
                    open={open}
                    onOpenChange={setOpen}
                    translation={translation}
                    card={mapRoomToCardData(selectedRoom, locale)}
                />
            )}

            <div className="block lg:hidden text-center mt-[20px]">
                <Link
                style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}}
                href={`/${locale}/rooms`}
                className='px-[20px] w-[190px] sm:px-6 py-2 rounded-[4px] text-sm sm:text-base transition-colors bg-white text-[#17849A] border border-[#17849A] hover:bg-gray-50 inline-block text-center'
                >
                    {translation.numberFond.seeAll}
                </Link>
            </div>
      </div>
    </section>
  );
}

export default RoomFund;
