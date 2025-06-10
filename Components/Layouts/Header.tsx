'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n.config";
import LanguageSwitcher from "../ui/TranslateChange";
import { AnimatePresence } from "framer-motion";
import MarqueeBanner from "../ui/Marquee";
import { usePathname } from "next/navigation";
import MenuMob from "../ui/Menu";

interface HeaderProps {
  lang: Locale;
  translation: any;
}

const Header = ({ lang, translation }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}`;

  return (
    <header className="fixed top-0 left-0 md:px-0 w-full backdrop-blur-md bg-black/60 text-white z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </button>
        </div>
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image
            src="/Header/logo.png"
            alt="Hotel Ideal"
            width={132}
            height={81}
            className="w-[55px] sm:w-[65px] md:w-[80px] lg:w-[132px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${lang}/`} className="hover:underline">
            {translation.Header.Home}
          </Link>
          <Link href={`/${lang}/rooms`} className="hover:underline">
            {translation.Header.Numbers}
          </Link>
          <Link href={`/${lang}/about`} className="hover:underline">
            {translation.Header.About}
          </Link>
          <Link href={`/${lang}/contact`} className="hover:underline">
            {translation.Header.Contacts}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher currentLang={lang} />
          <a href="https://www.booking.com/hotel/uz/ideal.ru.html?aid=356980&label=gog235jc-1FCAso7gFCBWlkZWFsSCFYA2juAYgBAZgBIbgBB8gBDNgBAegBAfgBAogCAagCA7gCtOGPwgbAAgHSAiQxZWNkM2YwOC03YmU0LTQxNjgtOTlkMS1kYjc2ZDg4NGYyZWXYAgXgAgE&sid=8136d488b6369e48ce8df4ee8b85941e&dest_id=-2578646&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749283004&srpvid=041937da0ab300a7&type=total&ucfs=1&" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded">
                {translation.Header.Book}
              </button>
          </a>
        </div>
        <div className="w-[10px] md:hidden"></div>
      </div>

      <AnimatePresence>
        <div className="z-50">
          {isOpen && (
                  <MenuMob
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    lang={lang}
                    translation={translation}
                  />
          )}
        </div>
      </AnimatePresence>
    {isHomePage && <MarqueeBanner translation={translation} />}
    </header>
  );
};

export default Header;
