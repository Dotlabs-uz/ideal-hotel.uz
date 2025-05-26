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

const socialLinks = [
  { icon: '/images/icon/twiter.png', alt: 'Twitter', href: '#' },
  { icon: '/images/icon/instagram.png', alt: 'Instagram', href: '#' },
  { icon: '/images/icon/facebook.png', alt: 'Facebook', href: '#' }
];

const Footer: React.FC<FooterProps> = ({ translation, lang }) => {
  return (
    <footer className="bg-[#2A2A2A] text-white py-10 px-5 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        <div className="flex flex-col items-start">
          <Image src="/Header/logo.png" alt="Hotel Ideal Logo" width={120} height={60} />
        </div>

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

        <div className="flex flex-col gap-4 items-start md:items-end">
          <button className="bg-white text-black px-5 py-2 rounded-md">{translation.bookNow}</button>
        </div>
      </div>

      <div className="mx-auto max-w-[1260px] mt-10 border-t border-[#444] pt-5 text-center text-[14px] text-[#aaa]">
            <div className="flex px-[30px] items-center justify-between">
                <div className="flex items-center gap-[80px]">
                    <p>ALL RIGHTS RESERVED. COPYRIGHTS © 2025 LTD.</p>
                    <div className="flex justify-center gap-5">
                        <Link href={`/${lang}/privacy-policy`}>PRIVACY POLICY</Link>
                        <Link href={`/${lang}/terms`}>TERMS & CONDITIONS</Link>
                    </div>
                </div>
                <div className="flex gap-3">
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
