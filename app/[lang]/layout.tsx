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

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { lang } = await params;
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
          url: "/og-image.jpg",
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const translation = await getDictionary(lang);

  return (
    <html lang={lang} className={Oceanic.className}>
      <body>
          <div style={{ fontFamily: "Monrope, sans-serif" }}>
            <Header lang={lang} translation={translation} />
          </div>
            <PageTransition>
              {children}
            </PageTransition>
          <Footer lang={lang} translation={translation.footer} />
      </body>
    </html>
  );
}
