'use client';

import { motion } from 'framer-motion';

interface BannerProps {
  translation: {
    banner: {
      welcome: string;
      bannerTxt: string;
      animationTxt: string;
    };
  };
}

const BannerAnim = ({ translation }: BannerProps) => {
  return (
    <div className="w-[250px] md:w-[300px] lg:w-[500px] h-[250px] md:h-[300px] lg:h-[500px] bg-[#AFB0B2] rounded-2xl">
        <div className="relative w-[250px] md:w-[270px] lg:w-[450px] h-[250px] md:h-[300px] lg:h-[500px] rounded-r-2xl bg-[#0D96A6] overflow-hidden flex items-center justify-between bg-cover bg-center pl-5 md:pl-8 lg:pl-12" 
        style={{ backgroundImage: "url('/BannerImages/ten.png')" }}>

        <div className="text-white z-10 w-[120px] md:w-[150px] lg:w-[200px]">
            <h2 className="text-[12px] md:text-[16px] lg:text-[20px] font-medium mb-6">
              {translation.banner.animationTxt}
            </h2>
        </div>

        <div className="h-[600px]  pt-[50px] relative">
        <svg
            className="h-[70%] w-[150px] lg:w-[200px] z-0 absolute bottom-0 right-0"
            viewBox="0 0 300 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            id="motionPath"
            d="M100,500 L100,100 A150,150 0 0 1 400,100"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            />

            <motion.g
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
            <g>
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#motionPath" />
                </animateMotion>
                <path
      d="M42 31.5C34.3636 29.25 24.8182 15.75 21 0C17.1818 15.75 9.54545 28.5 0 31.5C11.4545 36 15.9091 52.5 21 63C24.8182 54 30.5455 36 42 31.5Z"
      fill="white"
      transform="translate(-21, -31.5)"
    />
            </g>
            </motion.g>
        </svg>
        </div>


          <div className="absolute bottom-0 left-0 w-[45vw] sm:w-[30vw] md:w-[25vw] lg:w-[350px]">
            <svg
              viewBox="0 0 200 125"
              preserveAspectRatio="xMinYMin meet"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="50" x2="150" y2="50" stroke="white" strokeWidth="1" />
              <line x1="150" y1="50" x2="150" y2="150" stroke="white" strokeWidth="1" />
              <circle cx="150" cy="50" r="20" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
    </div>
  );
};

export default BannerAnim;
