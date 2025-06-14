'use client'

import Link from "next/link";
import Services from "../ui/Services";


interface Advantages {
  translation: {
    advantages: {
        advantages: string;
        services: string;
        btnTxt: string;
        txt: string;
    };
  };
}

const Advantages = ({ translation }: Advantages) => {

  return (
    <section className="pt-[0px] md:pt-[50px] lg:pt-[80px] px-3 lg:px-6">
      <div>
        <div className="flex lg:justify-between flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap items-start gap-0 md:gap-x-[30px] lg:gap-1 ">
            <div className="flex gap-[20px] flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap">
                <h2 style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
                  className="lg:block text-[16px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-light text-[#17849A]">
                    {translation.advantages.services}
                </h2>
                <div className="">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-12 font-bold mb-0 sm:mb-[10px] md:mb-[17px] lg:mb-[27px] text-[#17849A]">
                        {translation.advantages.advantages}
                    </h2>
                    <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
                      className="text-[#00232A] my-3 md:my-5 lg:my-0 mx-auto font-light text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                        {translation.advantages.txt}
                    </p>
                </div>
            </div>
            <div className=" lg:block text-center">
              <a href="https://www.booking.com/hotel/uz/ideal.ru.html?aid=356980&label=gog235jc-1FCAso7gFCBWlkZWFsSCFYA2juAYgBAZgBIbgBB8gBDNgBAegBAfgBAogCAagCA7gCtOGPwgbAAgHSAiQxZWNkM2YwOC03YmU0LTQxNjgtOTlkMS1kYjc2ZDg4NGYyZWXYAgXgAgE&sid=8136d488b6369e48ce8df4ee8b85941e&dest_id=-2578646&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749283004&srpvid=041937da0ab300a7&type=total&ucfs=1&"
                target="_blank"
                rel="noopener noreferrer" >
                  <button style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} 
                    className='px-[20px] w-[250px] sm:px-6 py-2 rounded-[4px] text-sm sm:text-base transition-colors bg-white text-[#17849A] border border-[#17849A] hover:bg-gray-50'>
                      {translation.advantages.btnTxt}
                  </button>
                </a>
            </div>
        </div>
        <Services />
      </div>
    </section>
  );
}

export default Advantages;
