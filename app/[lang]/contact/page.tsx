import ContactMid from "@/Components/ContactPage/ContactMid";
import ContactMap from "@/Components/HomePage/ContactMap";
import FAQ from "@/Components/ui/Faq";
import HeroRooms from "@/Components/ui/nextBanner";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function contact({params}:{params:{lang:Locale}}) {
	
 const { lang } = await params

  const translation = await getDictionary(lang);

  return (
	<main className="">
        <div className="">
          <HeroRooms translation={translation.contact}/>
          <ContactMid translation={translation}/>
          <FAQ />
          <ContactMap />
        </div>
	</main>
  );
}
