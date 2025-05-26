import AboutBanner from "@/Components/AboutPage/AboutBanner";
import AboutFooter from "@/Components/AboutPage/AboutFooter";
import GalleryTabs from "@/Components/HomePage/GalleryTabs";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function contact({params}:{params:{lang:Locale}}) {
	
    const { lang } = await params

    const translation = await getDictionary(lang);

    return (
        <main className="">
            <div className="lg:h-[1050px]">
                <AboutBanner translation={translation} />
            </div>
            <GalleryTabs lang={lang} translation={translation}  />
            <AboutFooter translation={translation} />
        </main>
    );
}
