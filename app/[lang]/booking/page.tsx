import HeroRooms from "@/Components/ui/nextBanner";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import BeBookingForm from "@/Components/BeForms/BeBookingForm";

type Params = Promise<{ lang: Locale }>

export default async function Booking({params}:{params:Params}) {

    const { lang } = await params;
    const translation = await getDictionary(lang);

    return (
        <div className="">
            <HeroRooms translation={translation.booking}/>
            <BeBookingForm lang={lang} />
        </div>
    );
}
