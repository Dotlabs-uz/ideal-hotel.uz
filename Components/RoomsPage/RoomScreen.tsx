'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import rooms from '@/lib/data/Room.json';
import RoomCard from '../ui/CardRoom';
import CardModal from '../ui/CardModal';
import { mapRoomToCardData } from '@/lib/mapRoomToCardData';

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
  };
}

const RoomScreen = ({ translation }: numberFond) => {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const categories: { id: RoomCategory; name: string }[] = [
    { id: 'all', name: translation.numberFond.all || 'Все' },
    { id: 'standard', name: translation.numberFond.standard || 'standard' },
    { id: 'superior', name: translation.numberFond.superior || 'superior' },
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

  console.log(rooms);
  

  const segments = pathname.split('/');
  const locale = (segments[1] as 'ru' | 'uz' | 'en') || 'ru';

  return (
    <section className="max-w-[12660px] mx-auto mb-[50px] pt-[10px] lg:pt-[80px] px-6">
      <div>
        <div className="flex justify-between gap-1 sm:justify-start sm:gap-4 mb-[10px] md:mb-12 relative border-b border-gray-200">
          <ul style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="flex w-full list-none p-0 m-0 font-medium text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px]">
            {categories.map((category) => (
              <motion.li
                key={category.id}
                className={`relative cursor-pointer w-full text-center py-2 transition-colors ${
                  activeCategory === category.id
                    ? 'text-[#17849A]'
                    : 'text-gray-500 hover:text-[#17849A]'
                }`}
                onClick={() => handleClick(category.id)}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#17849A] rounded"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <AnimatePresence mode="wait">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-[20px] md:pb-[50px] lg:pb-[80px]">
                {filteredRooms.slice(0, 6).map((room) => (
                <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <RoomCard
                      image={room.image}
                      title={room.title[locale]}
                      features={room.features[locale]}
                      underCategories={room.underCategories}
                      onClick={() => handleOpenRoom(room)}
                    />
                </motion.div>
                ))}
            </div>
        </AnimatePresence>
      </div>

      {selectedRoom && (
        <CardModal
          open={open}
          onOpenChange={setOpen}
          card={mapRoomToCardData(selectedRoom, locale)}
        />
      )}
    </section>
  );
};

export default RoomScreen;
