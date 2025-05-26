import RoomScreen from "@/Components/RoomsPage/RoomScreen";
import HeroRooms from "@/Components/ui/nextBanner";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function rooms({params}:{params:{lang:Locale}}) {
	
 const { lang } = await params

  const translation = await getDictionary(lang);

  console.log(translation.Home.title);
  

  return (
	<main className="">
        <div className="">
          <HeroRooms translation={translation.fondBanners}/>
          <RoomScreen translation={translation}/>
        </div>
	</main>
  );
}
