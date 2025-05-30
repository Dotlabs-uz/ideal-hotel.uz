import RoomScreen from "@/Components/RoomsPage/RoomScreen";
import HeroRooms from "@/Components/ui/nextBanner";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type Params = Promise<{ lang: Locale }>


export default async function Rooms({params}:{params:Params}) {
	
 const { lang } = await params

  const translation = await getDictionary(lang);

  console.log(translation.Home.title);
  

  return (
        <>
          <HeroRooms translation={translation.fondBanners}/>
          <div className="max-w-[1260px] mx-auto">
            <RoomScreen translation={translation}/>
          </div>
        </>
  );
}
