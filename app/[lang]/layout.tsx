import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Layouts/Header";
import Footer from "@/Components/Layouts/Footer";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import PageTransition from "@/Components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Ideal-Hotel.uz",
  description: "Ideal-Hotel Samarkand",
  icons: {
    icon: "/favicon.ico",
  }
};

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
    <html lang={lang}>
      <body>
        <PageTransition>
          <Header lang={lang} translation={translation} />
          {children}
          <Footer lang={lang} translation={translation.footer} />
        </PageTransition>
      </body>
    </html>
  );
}
