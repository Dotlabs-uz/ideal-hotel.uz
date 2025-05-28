// import Advantages from "@/Components/HomePage/Advantages";
// import Banner from "@/Components/HomePage/Banner";
// import ContactMap from "@/Components/HomePage/ContactMap";
// import GalleryTabs from "@/Components/HomePage/GalleryTabs";
// import GuestReviews from "@/Components/HomePage/GuestReviews";
// import Map from "@/Components/HomePage/Map";
// import RoomFund from "@/Components/HomePage/numberFond";
// import FAQ from "@/Components/ui/Faq";
// import { Locale } from "@/i18n.config";
// import { getDictionary } from "@/lib/dictionary";

// type Params = Promise<{ lang: Locale }>

// export default async function Home({params}:{params:Params}) {
	
//  const { lang } = await params

//   const translation = await getDictionary(lang);

//   console.log(translation.Home.title);
  

//   return (
//     <>
// 				<Banner translation={translation} />
//         <div className="max-w-[1200px] mx-auto">
//           <RoomFund translation={translation} />
//           <GalleryTabs translation={translation} lang={lang} />
//           <Advantages translation={translation} />
//           <Map translation={translation}/>
//           <GuestReviews translation={translation} />
//           <FAQ translation={translation} />
//           <ContactMap translation={translation}  />
//         </div>
//     </>
//   );
// }

import Advantages from "@/Components/HomePage/Advantages";
import Banner from "@/Components/HomePage/Banner";
import ContactMap from "@/Components/HomePage/ContactMap";
import GalleryTabs from "@/Components/HomePage/GalleryTabs";
import GuestReviews from "@/Components/HomePage/GuestReviews";
import Map from "@/Components/HomePage/Map";
import RoomFund from "@/Components/HomePage/numberFond";
import FAQ from "@/Components/ui/Faq";
import Reveal from "@/Components/ui/Reveal"; // Импорт анимационной обёртки
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

type Params = Promise<{ lang: Locale }>

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const translation = await getDictionary(lang);

  return (
    <>
      <Banner translation={translation} />

      <div className="max-w-[1200px] mx-auto space-y-16">
        <Reveal direction="left">
          <RoomFund translation={translation} />
        </Reveal>

        <Reveal direction="right">
          <GalleryTabs translation={translation} lang={lang} />
        </Reveal>

        <Reveal direction="bottom">
          <Advantages translation={translation} />
        </Reveal>

        <Reveal direction="top">
          <Map translation={translation} />
        </Reveal>

        <Reveal direction="left">
          <GuestReviews translation={translation} />
        </Reveal>

        <Reveal direction="right">
          <FAQ translation={translation} />
        </Reveal>

        <Reveal direction="bottom">
          <ContactMap translation={translation} />
        </Reveal>
      </div>
    </>
  );
}

