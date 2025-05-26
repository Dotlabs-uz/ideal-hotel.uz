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
    <div className="w-full bg-[#17849A] my-[100px] h-[371px] shadow-md">
        <div className="relative max-w-6xl mx-auto px-4 py-[20px] flex items-center h-full justify-between">
            <ContactInfo translation={translation.contactInfo} />
            <div className="absolute top-[-50px] px-[20px] right-0">
                <ContactForm translation={translation.contactForm}  />
            </div>
        </div>

    </div>
  );
};

export default ContactMid;