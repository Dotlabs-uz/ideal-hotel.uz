'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./TranslateChange";
import { Locale } from "@/i18n.config";

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

    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div className="">
        <motion.div
            ref={menuRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="md:hidden w-full relative bg-black/90 backdrop-blur h-screen rounded-bl-[20px] rounded-br-[20px] px-4 pb-4 z-50"
            >
                <motion.nav
                className="flex flex-col gap-4 p-[20px]"
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

                {/* <motion.div
                    variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                > */}
                    <button
                    onClick={() => setIsOpen(false)}
                    className="absolute bottom-[100px] left-[20px] right-[20px] py-2 border border-white text-white bg-[#17849A] hover:bg-white hover:text-black rounded"
                    >
                    {translation.Header.Book}
                    </button>
                {/* </motion.div> */}
            </motion.nav>
        </motion.div>
    </div>
  );
};

export default MenuMob;
