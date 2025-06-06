"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaGlobe } from "react-icons/fa";


const LANGUAGES = [
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
  { code: "uz", label: "UZB" },
];

interface LanguageSwitcherProps {
  currentLang: string;
}

const LanguageSwitcher = ({ currentLang }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (newLang: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (LANGUAGES.some(lang => lang.code === segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }
    const newPath = "/" + segments.join("/");
    router.push(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
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
    <div ref={switcherRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 cursor-pointer select-none text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FaGlobe size={20} className="text-white" />
        <span>{currentLang.toUpperCase()}</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-28 bg-black/60 rounded shadow-lg py-1 z-50">
          {LANGUAGES.map(({ code, label }) => (
            <div
              key={code}
              onClick={() => changeLanguage(code)}
              className={`px-4 py-2 cursor-pointer hover:bg-white hover:text-black ${
                code === currentLang ? "font-bold" : ""
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
