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
  { key: 'about', href: '/About' }
];

const socialLinks = [
  { icon: '/images/icon/twiter.png', alt: 'Twitter', href: '#' },
  { icon: '/images/icon/instagram.png', alt: 'Instagram', href: '#' },
  { icon: '/images/icon/facebook.png', alt: 'Facebook', href: '#' }
];

const Footer: React.FC<FooterProps> = ({ translation, lang }) => {
  return (
    <footer className="bg-[#2A2A2A] text-white py-10 px-5 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-8 items-start lg:flex lg:justify-between ">
        <div className="flex flex-col items-start gap-2 lg:w-[200px]">
          <div className="flex flex-col items-start">
            <Image src="/Header/logo.png" alt="Hotel Ideal Logo" width={120} height={60} />
          </div>
          <div className="md:hidden flex flex-col gap-4 items-start">
            <button className="bg-white text-black px-5 py-2 rounded-md">{translation.bookNow}</button>
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
              <button className="bg-white text-black px-5 py-2 rounded-md">{translation.bookNow}</button>
            </div>
          </div>
        </div>

      </div>

      <div className="mx-auto max-w-[1260px] mt-10 border-t border-[#444] pt-5 text-[14px] text-[#aaa]">
        <div className="flex flex-col gap-4 items-center text-center lg:flex-row lg:justify-between lg:text-left px-[10px] lg:px-[30px]">
          <div className="flex flex-col lg:flex-row lg:gap-15 gap-2 items-center lg:items-start">
            <p>ALL RIGHTS RESERVED. COPYRIGHTS © 2025 LTD.</p>
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-5">
              <Link href={`/${lang}/terms`}>TERMS & CONDITIONS</Link>
              <Link href={`/${lang}/privacy-policy`}>PRIVACY POLICY</Link>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <Link key={idx} href={link.href} target="_blank">
                <Image src={link.icon} alt={link.alt} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
