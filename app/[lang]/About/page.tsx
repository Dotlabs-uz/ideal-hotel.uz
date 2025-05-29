import AboutBanner from "@/Components/AboutPage/AboutBanner";
import AboutFooter from "@/Components/AboutPage/AboutFooter";
import GalleryTabs from "@/Components/HomePage/GalleryTabs";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type Params = Promise<{ lang: Locale }>

export default async function About({params}:{params:Params}) {
	
    const { lang } = await params

    const translation = await getDictionary(lang);

    return (
        <>
                <div className="lg:h-[1050px]">
                    <AboutBanner translation={translation} />
                </div>
            <div className="max-w-[1260px] mx-auto">
                <GalleryTabs lang={lang} translation={translation}  />
                <AboutFooter translation={translation} />
            </div>
        </>
    );
}
