import ContactsLink from "@/Components/ContactPage/ContactLink";
import ContactMid from "@/Components/ContactPage/ContactMid";
import ContactMap from "@/Components/HomePage/ContactMap";
import FAQ from "@/Components/ui/Faq";
import HeroRooms from "@/Components/ui/nextBanner";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type Params = Promise<{ lang: Locale }>

export default async function Contact({params}:{params:Params}) {
	
 const { lang } =await params
 const translation = await getDictionary(lang);

  return (
        <div className="">
          <HeroRooms translation={translation.contact}/>
          <ContactsLink lang={lang} />
          <ContactMid translation={translation}/>
          <FAQ translation={translation} />
          <ContactMap translation={translation} />
        </div>
  );
}
