import React from 'react';
import ContactForm from './ContactForum';
import ContactInfo from './ContactInfo';

interface contactForm {
    translation: {
        contactForm: {
            header: string,
            txt: string,
            name: string,
            mail: string,
            messages: string,
            btn: string,
        },
        contactInfo: {
            header: string,
            txt: string
        }
    }
}

const ContactMid = ({ translation }: contactForm) => {
  return (
    <div className="w-full bg-[#17849A] my-[10px] mb-[390px] md:my-[100px] h-[300px] md:h-[371px] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-[40px] flex items-center h-full flex-wrap md:flex-nowrap justify-between">
            <ContactInfo translation={translation.contactInfo} />
            <div className="w-fit mx-auto mt-[20px] md:mt-[0]">
                <ContactForm translation={translation.contactForm}  />
            </div>
        </div>
    </div>
  );
};

export default ContactMid;
