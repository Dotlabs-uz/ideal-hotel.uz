"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

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

  const changeLanguage = (newLang: string) => {
    // Разбиваем путь на сегменты
    const segments = pathname.split("/").filter(Boolean); // убираем пустые

    // Если первый сегмент - это код языка, заменяем его, иначе добавляем
    if (LANGUAGES.some(lang => lang.code === segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }

    const newPath = "/" + segments.join("/");

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 cursor-pointer select-none text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>🌐 {currentLang.toUpperCase()}</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-28 bg-black/90 rounded shadow-lg py-1 z-50">
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
