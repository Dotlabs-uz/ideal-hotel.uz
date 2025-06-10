import Advantages from "@/Components/HomePage/Advantages";
import Banner from "@/Components/HomePage/Banner";
import ContactMap from "@/Components/HomePage/ContactMap";
import GalleryTabs from "@/Components/HomePage/GalleryTabs";
import GuestReviews from "@/Components/HomePage/GuestReviews";
import Map from "@/Components/HomePage/Map";
import RoomFund from "@/Components/HomePage/numberFond";
import FAQ from "@/Components/ui/Faq";
import Reveal from "@/Components/ui/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const translation = await getDictionary(params.lang);

  return (
    <>
      <Banner translation={translation} />
      <div className="max-w-[1200px] mx-auto space-y-16">
        <Reveal direction="bottom">
          <RoomFund translation={translation} />
        </Reveal>

        <Reveal direction="bottom">
          <GalleryTabs translation={translation} lang={params.lang} />
        </Reveal>

        <Reveal direction="bottom">
          <Advantages translation={translation} />
        </Reveal>

        <Reveal direction="bottom">
          <Map translation={translation} />
        </Reveal>

        <Reveal direction="bottom">
          <GuestReviews translation={translation} />
        </Reveal>

        <Reveal direction="bottom">
          <FAQ translation={translation} />
        </Reveal>

        <Reveal direction="bottom">
          <ContactMap translation={translation} />
        </Reveal>
      </div>
    </>
  );
}
