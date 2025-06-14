'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./TranslateChange";
import { Locale } from "@/i18n.config";
import { Menu, X } from "lucide-react";

interface MenuMobProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  lang: Locale;
  translation: any;
}

const MenuMob = ({ translation, lang, isOpen, setIsOpen }: MenuMobProps) => {
    const pathname = usePathname();
    const isHomePage = pathname === `/${lang}`;

    const menuRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.body.style.overflow = "hidden"; 
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.body.style.overflow = ""; 
  }

  return () => {
    document.body.style.overflow = ""; 
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen]);

  return (
    <div className="absolute top-0 right-0 left-0">
        <motion.div
                ref={menuRef}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="md:hidden w-full relative bg-black/15 backdrop-blur-lg h-screen px-3 pb-4 z-50"
              >
                <div className="flex justify-between items-center px-[15px] pt-[30px]">
                  <div className="" onClick={() => setIsOpen(false)}>
                    <X size={24} />
                  </div>
                    <motion.div
                      className="mt-4"
                      variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <LanguageSwitcher currentLang={lang} />
                    </motion.div>
                </div>
                <motion.nav
                  className="flex flex-col gap-4 py-[55px] px-[20px]"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                      hidden: {},
                      visible: {
                      transition: {
                          staggerChildren: 0.5,
                      },
                      },
                  }}
                  >
                  {[
                      {
                      href: `/${lang}/`,
                      label: translation.Header.Home,
                      },
                      {
                      href: `/${lang}/rooms`,
                      label: translation.Header.Numbers,
                      },
                      {
                      href: `/${lang}/about`,
                      label: translation.Header.About,
                      },
                      {
                      href: `/${lang}/contact`,
                      label: translation.Header.Contacts,
                      },
                  ].map(({ href, label }) => (
                      <motion.div
                      key={href}
                      variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      >
                      <Link
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className="hover:underline text-white text-xl"
                      >
                          {label}
                      </Link>
                      </motion.div>
                  ))}
                  {/* <motion.div
                      variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                  > */}
                    <a href="https://www.booking.com/hotel/uz/ideal.ru.html?aid=356980&label=gog235jc-1FCAso7gFCBWlkZWFsSCFYA2juAYgBAZgBIbgBB8gBDNgBAegBAfgBAogCAagCA7gCtOGPwgbAAgHSAiQxZWNkM2YwOC03YmU0LTQxNjgtOTlkMS1kYjc2ZDg4NGYyZWXYAgXgAgE&sid=8136d488b6369e48ce8df4ee8b85941e&dest_id=-2578646&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749283004&srpvid=041937da0ab300a7&type=total&ucfs=1&" target="_blank" rel="noopener noreferrer">
                      <button
                      style={{ boxShadow: '0 0 7px 0 #17849A'}}
                      onClick={() => setIsOpen(false)}
                      className="absolute bottom-[50px] left-[20px] right-[20px] py-2 border text-black/85 bg-[#fff] hover:bg-white hover:text-black rounded"
                      // #17849A
                      >
                        {translation.Header.Book}
                      </button>
                    </a>
                  {/* </motion.div> */}
                </motion.nav>
        </motion.div>
      <div className=""></div>
    </div>
  );
};

export default MenuMob;
