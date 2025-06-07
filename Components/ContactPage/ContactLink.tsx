import Image from "next/image";
import React from "react";
import { contactsData } from "../../lib/data/contactsData";

interface ContactsLinkProps {
  lang?: "ru" | "en" | "uz";
}

const ContactsLink = ({ lang = "ru" }: ContactsLinkProps) => {
  const contacts = contactsData[lang];

  return (
    <div className="max-w-[1100px] mb-[50px] px-5 mt-[30px] md:mt-[50px] lg:mt-[80px] lg:px-5 mx-auto">
      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[40px] justify-between text-center md:text-left">
        {contacts.map((item, index) => (
          <div key={index} className="flex flex-col gap-[23px] md:gap-[30px]">
            <Image src={item.icon} alt={item.title} width={50} height={50} className="mx-auto md:mx-0 w-[37px] md:w-[42px] lg:w-[50px]" />
            <h2 className="text-[27px] md:text-[30px] lg:text-[36px] text-[#17849A] font-medium">
              {item.title}
            </h2>
            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 400}} className="text-[13px] mx-auto md:mx-0 md:text-[16px] lg:text-[18px] text-[#4A4A4A] w-[235px] lg:w-[315px]">
              {item.description}
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <p
                  style={{ fontFamily: 'Monrope, sans-serif', fontWeight: 500 }}
                  className="text-[22px] md:text-[26px] lg:text-[30px]"
                >
                  {item.contact}
                </p>
                {item.arrow && (
                  <Image
                    src="/images/icon/arrowRight.png"
                    alt="arrow"
                    width={41}
                    height={20}
                    className="w-[30px] h-[15px] md:w-[41px] md:h-[20px]"
                  />
                )}
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsLink;
