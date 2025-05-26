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
    <div className="w-[500px] h-[500px] bg-[#AFB0B2]">
        <div className="relative w-[450px] h-[500px] bg-[#0D96A6] overflow-hidden flex items-center justify-between bg-cover bg-center px-12" 
        style={{ backgroundImage: "url('/BannerImages/ten.png')" }}>

        <div className="text-white z-10 max-w-[200px]">
            <h2 className="text-[20px] font-medium mb-6">
            {translation.banner.animationTxt}
            </h2>
        </div>

        <div className="h-full pt-[50px] relative">
        <svg
            className="h-[70%] w-[200px] z-0 absolute bottom-0 right-0 mt-[70px]"
            viewBox="0 0 200 500"
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
                <polygon
                points="25,0 30,18 48,18 33,29 38,47 25,36 12,47 17,29 2,18 20,18"
                fill="white"
                transform="translate(-3, -5) scale(0.3)"
                />
            </g>
            </motion.g>
        </svg>
        </div>

        </div>
    </div>
  );
};

export default BannerAnim;
