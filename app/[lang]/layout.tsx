import "./globals.css";
import './font.css';
import type { Metadata } from "next";
import localFont from 'next/font/local'
import Header from "@/Components/Layouts/Header";
import Footer from "@/Components/Layouts/Footer";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import PageTransition from "@/Components/ui/PageTransition";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Ideal-Hotel.uz",
  description: "Ideal-Hotel Samarkand",
  icons: {
    icon: "/favicon.ico",
  }
};

const Oceanic = localFont({
  src: [
    {
      path: '../fonts/TRIAL-Oceanic/TRIAL_Oceanic-Regular-BF6487cfe600a81.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TRIAL-Oceanic/TRIAL_Oceanic-Bold-BF6487cfe5cfe3d.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

type Params = Promise<{ lang: Locale }>

export default async function RootLayout({
  children,
  params, 
}: {
  children: React.ReactNode;
  params: Params
}) {
  const { lang } = await params;

  const translation = await getDictionary(lang);

  return (
    <html lang={lang} className={Oceanic.className}>
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <PageTransition>
          <div style={{ fontFamily: 'Monrope, sans-serif' }}>
            <Header lang={lang} translation={translation} />
          </div>
          {children}
          <Footer lang={lang} translation={translation.footer} />
        </PageTransition>
      </body>
    </html>
  );
}
