'use client';

import { motion } from 'framer-motion';
import BannerAnim from './BannerAnim';

type BannerProps = {
  translation: {
    banner: {
      welcome: string;
      bannerTxt: string;
      animationTxt: string;
      Book: string;
    };
  };
};

const Banner = ({ translation }: BannerProps) => {
  return (
    <div
      className="w-full h-[400px] md:h-[600px] lg:h-[800px] bg-cover bg-center flex flex-col justify-center text-white px-4"
      style={{ backgroundImage: "url('/BannerImages/receptionTop.webp')" }}
    >
      <div className="relative h-full max-w-[1200px] w-full flex justify-between items-center mx-auto">
        
        <motion.div
          className="z-20 md:ml-[50px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            style={{ fontFamily: 'Monrope, sans-serif', fontWeight: 500 }}
            className="text-[14px] md:text-[16px] lg:text-[20px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {translation.banner.welcome}
          </motion.p>

          <motion.h1
            className="font-oceanic w-[350px] sm:w-[410px] md:w-[600px] lg:w-[700px] text-[48px] md:text-[80px] lg:text-[90px] font-bold leading-12 md:leading-20 lg:leading-22"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {translation.banner.bannerTxt}
          </motion.h1>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-[20px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <BannerAnim translation={translation} />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
