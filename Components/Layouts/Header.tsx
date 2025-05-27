'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ← Импортируем Link
import type { Locale } from "@/i18n.config";
import LanguageSwitcher from "../ui/TranslateChange";

interface HeaderProps {
  lang: Locale;
  translation: any;
}

const Header = ({ lang, translation }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 md:px-0 w-full backdrop-blur-md bg-black/60 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/Header/logo.png" alt="Hotel Ideal" width={132} height={81} className="w-[55px] sm:w-[65px] md:w-[80px] lg:w-[132px]" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
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
          <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded">
            {translation.Header.Book}
          </button>
        </div>
        <div className="w-[10px] md:hidden"></div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-4">
            <Link href={`/${lang}/rooms`} className="hover:underline">
              {translation.Header.Numbers}
            </Link>
            <Link href={`/${lang}/about`} className="hover:underline">
              {translation.Header.About}
            </Link>
            <Link href={`/${lang}/contact`} className="hover:underline">
              {translation.Header.Contacts}
            </Link>
            <div className="flex items-center gap-2 mt-2">
              <LanguageSwitcher currentLang={lang} />
            </div>
            <button className="px-4 py-2 border border-white text-white bg-[#17849A] hover:bg-white hover:text-black rounded">
              {translation.Header.Book}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
