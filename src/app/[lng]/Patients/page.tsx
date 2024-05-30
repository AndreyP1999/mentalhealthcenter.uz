import { Metadata, ResolvingMetadata } from "next";
import type { Patients } from "@prisma/client";

import { localizationMain } from "@/local/main";
import { localizationPatients } from "@/local/patients";
import { mainLanguages } from "@/local/listLang";

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

import { MainContent } from "./MainContent";

export async function generateMetadata({ params }: { params?: { lng: "uz" | "en" } }, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const lang = params ? params.lng : mainLanguages
    return {
        title: localizationPatients[lang]?.head?.title ?? "",
        description: localizationPatients[lang]?.head?.description ?? "",
        keywords: localizationPatients[lang]?.head?.keywords ?? "",
    }
}

export default function Patients({ params }: {
    params: { lng: "ru" | "uz" | "en" }
}) {



    return (
        <>
            <Header lng={params.lng}  />
            <div className="container mx-auto flex flex-col items-stretch pt-5 h-screen">
                <div className="flex-col mb-5 text-black text-4xl font-bold uppercase relative whitespace-nowrap overflow-hidden min-h-[170px] justify-center pl-28 pr-5 pt-16 pb-16 items-start max-md:max-w-full">
                    <img
                        loading="lazy"
                        srcSet="/bg/bg-1.png"
                        className="absolute h-full w-full object-cover object-center inset-0"
                    />
                    <h1 className="absolute ">
                        {localizationPatients[params.lng].bannerText}

                    </h1>
                </div>
                <MainContent
                    download={localizationPatients[params.lng].download}
                    find={localizationPatients[params.lng].find}
                    file_name={localizationPatients[params.lng].file_name}
                    title={localizationPatients[params.lng].title}
                    upload_date={localizationPatients[params.lng].upload_date}
                    params={params}
                />

            </div>
            <Footer lng={params.lng}/>
        </>
    );
}
