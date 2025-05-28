'use client'

import Image from "next/image";
import Attractions from "../ui/Attraction";


interface Advantages {
  translation: {
    guide: {
        guide: string;
        places: string;
        txt: string;
        btn: string;
    };
  };
}

const Map = ({ translation }: Advantages) => {

  return (
    <section className="pt-[30px] md:pt-[50px] lg:pt-[80px] px-6">
      <div>
        <div className="flex lg:justify-between flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap items-start gap-0 md:gap-x-[30px] lg:gap-1 ">
            <div className="flex gap-[20px] flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap">
                <h2 className="lg:block text-[16px] w-[220px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-light text-[#17849A]">
                    {translation.guide.guide}
                </h2>
                <div className="">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-12 font-bold mb-0 sm:mb-[10px] md:mb-[17px] lg:mb-[27px] text-[#17849A]">
                        {translation.guide.places}
                    </h2>
                    <p className="text-[#00232A] my-3 md:my-5 lg:my-0 mx-auto font-light text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                        {translation.guide.txt}
                    </p>
                </div>
            </div>
            <div className=" lg:block text-center">
                <button className='px-[20px] w-[250px] sm:px-6 py-2 rounded-[4px] text-sm sm:text-base transition-colors bg-white text-[#17849A] border border-[#17849A] hover:bg-gray-50'>
                    {translation.guide.btn}
                </button>
            </div>
        </div>
        <div className="mt-[20px] md:mt-[30px] lg:mt-[40px]">
            <Image src="/images/Map.png" alt="map" width={1200} height={550} />
        </div>

        <Attractions />
        {/* <Services /> */}
      </div>
    </section>
  );
}

export default Map;
