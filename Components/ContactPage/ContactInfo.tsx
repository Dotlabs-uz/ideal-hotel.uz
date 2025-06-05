// import Image from 'next/image';
import React from 'react';

interface ContactFormProps {
  translation: {
    header: string;
    txt: string;
  };
}

// const iconLinks = [
//   '/images/icon/facebook.png',
//   '/images/icon/twiter.png',
//   '/images/icon/instagram.png',
//   '/images/icon/youtube.png',
//   '/images/icon/linkedin.png'
// ];

const ContactInfo = ({ translation }: ContactFormProps) => {
  return (
    <div className="text-[#fff]">
      <h1 className="text-[27px] md:text-[36px] mb-[30px]">{translation.header}</h1>
      <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-[14px] md:text-[18px] w-[326px] md:w-[434px] font-light">{translation.txt}</p>

      {/* <div className="flex items-center gap-[20px] px-[10px] mt-[15px]">
        {iconLinks.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`icon-${index}`}
            width={26}
            height={26}
            className='w-[18px] md:w-[26px]'
          />
        ))}
      </div> */}
    </div>
  );
};

export default ContactInfo;
