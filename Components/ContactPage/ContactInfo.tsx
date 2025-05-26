import React from 'react';

interface contactForm {
    translation: {

        header: string,
        txt: string,
    }
}

const ContactInfo = ({ translation }: contactForm) => {
  return (
    <div className="text-[#fff]">
        <h1 className='text-[36px]'>{translation.header}</h1>
        <p className='text-[18px] w-[434px] font-light'>{translation.txt}</p>
    </div>
  );
};

export default ContactInfo;