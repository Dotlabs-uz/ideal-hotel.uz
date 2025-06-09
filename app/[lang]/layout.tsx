import "./globals.css";
import "./font.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Script from "next/script";

import Header from "@/Components/Layouts/Header";
import Footer from "@/Components/Layouts/Footer";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import PageTransition from "@/Components/ui/PageTransition";

// Подключение кастомного шрифта
const Oceanic = localFont({
  src: [
    {
      path: "../fonts/TRIAL-Oceanic/TRIAL_Oceanic-Regular-BF6487cfe600a81.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/TRIAL-Oceanic/TRIAL_Oceanic-Bold-BF6487cfe5cfe3d.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

// 🔥 Генерация метаданных с учетом языка
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { lang } = params;
  const t = await getDictionary(lang);

  return {
    title: t.metadata?.title || "Ideal-Hotel.uz",
    description: t.metadata?.description || "Ideal-Hotel Samarkand",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: t.metadata?.title || "Ideal-Hotel.uz",
      description: t.metadata?.description || "Ideal-Hotel Samarkand",
      url: `https://ideal-hotel.uz/${lang}`,
      siteName: "Ideal-Hotel.uz",
      locale: lang,
      type: "website",
      images: [
        {
          url: "/og-image.jpg", // путь к изображению в /public
          width: 1200,
          height: 630,
          alt: "Ideal Hotel Samarkand",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata?.title || "Ideal-Hotel.uz",
      description: t.metadata?.description || "Ideal-Hotel Samarkand",
      images: ["/og-image.jpg"],
    },
  };
}

// 🧱 Основный layout
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const translation = await getDictionary(lang);

  return (
    <html lang={lang} className={Oceanic.className}>
      <head>
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body>
        <PageTransition>
          <div style={{ fontFamily: "Monrope, sans-serif" }}>
            <Header lang={lang} translation={translation} />
          </div>
          {children}
          <Footer lang={lang} translation={translation.footer} />
        </PageTransition>
      </body>
    </html>
  );
}
