// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { Locale } from '@/i18n.config';

interface FooterProps {
  lang: Locale;
  translation: {
    rooms: string;
    services: string;
    contacts: string;
    about: string;
    workingDays: string;
    bookNow: string;
  };
}

const navLinks = [
  { key: 'rooms', href: '/rooms' },
  { key: 'services', href: '/services' },
  { key: 'contacts', href: '/contact' },
  { key: 'about', href: '/about' }
];

// const socialLinks = [
//   { icon: '/images/icon/twiter.png', alt: 'Twitter', href: '#' },
//   { icon: '/images/icon/instagram.png', alt: 'Instagram', href: '#' },
//   { icon: '/images/icon/facebook.png', alt: 'Facebook', href: '#' }
// ];

const Footer: React.FC<FooterProps> = ({ translation, lang }) => {
  return (
    <footer style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="bg-[#2A2A2A] text-white py-10 px-5 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-8 items-start lg:flex lg:justify-between ">
        <div className="flex flex-col items-start gap-2 lg:w-[200px]">
          <div className="flex flex-col items-start">
            <Image src="/Header/logo.png" alt="Hotel Ideal Logo" width={120} height={60} />
          </div>
          <div className="md:hidden flex flex-col gap-4 items-start">
            <a  href="https://www.booking.com/hotel/uz/ideal.ru.html?aid=356980&label=gog235jc-1FCAso7gFCBWlkZWFsSCFYA2juAYgBAZgBIbgBB8gBDNgBAegBAfgBAogCAagCA7gCtOGPwgbAAgHSAiQxZWNkM2YwOC03YmU0LTQxNjgtOTlkMS1kYjc2ZDg4NGYyZWXYAgXgAgE&sid=8136d488b6369e48ce8df4ee8b85941e&dest_id=-2578646&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749283004&srpvid=041937da0ab300a7&type=total&ucfs=1&"
                target="_blank"
                rel="noopener noreferrer">
              <button className="bg-white text-black px-5 py-2 rounded-md">{translation.bookNow}</button>
            </a>
          </div>
        </div>
        <div className="lg:w-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:flex lg:justify-between lg:max-w-[100%] ">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <Link key={idx} href={`/${lang}${link.href}`} className="text-[16px] hover:underline">
                  {translation[link.key as keyof typeof translation]}
                </Link>
              ))}
            </div>

            <div className="text-[16px]">
              <p>{translation.workingDays}</p>
              <p>9:00 AM - 6:00 PM</p>
              <p className="underline mt-2">39.6429° E 66.9550° N</p>
            </div>

            <div className="hidden md:flex gap-4 items-start">
              <a
                href="https://www.booking.com/hotel/uz/ideal.ru.html?aid=356980&label=gog235jc-1FCAso7gFCBWlkZWFsSCFYA2juAYgBAZgBIbgBB8gBDNgBAegBAfgBAogCAagCA7gCtOGPwgbAAgHSAiQxZWNkM2YwOC03YmU0LTQxNjgtOTlkMS1kYjc2ZDg4NGYyZWXYAgXgAgE&sid=8136d488b6369e48ce8df4ee8b85941e&dest_id=-2578646&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749283004&srpvid=041937da0ab300a7&type=total&ucfs=1&"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200"
              >
                {translation.bookNow}
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto max-w-[1260px] mt-10 border-t border-[#444] pt-5 text-[14px] text-[#aaa]">
        <div className="flex flex-col gap-4 items-center text-center lg:flex-row lg:justify-between lg:text-left px-[10px] lg:px-[30px]">
          <div className="flex flex-col lg:flex-row lg:gap-15 gap-2 items-center lg:items-start">
            <p>ALL RIGHTS RESERVED. COPYRIGHTS © 2025 LTD.</p>
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-5">
              <p>TERMS & CONDITIONS</p>
              {/* <Link href={`/${lang}/privacy-policy`}>PRIVACY POLICY</Link> */}
            </div>
          </div>

          {/* <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <Link key={idx} href={link.href} target="_blank">
                <Image src={link.icon} alt={link.alt} width={24} height={24} />
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
