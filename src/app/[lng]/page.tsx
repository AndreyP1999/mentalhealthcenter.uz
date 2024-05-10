import { mainLanguages } from "@/local/listLang";
import { localizationMain } from "@/local/main";
import { Metadata, ResolvingMetadata } from "next";

import Diagrams from "@/components/diagrams/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Banner from "@/components/main/banner/page";
import ListDepartment from "@/components/main/listDepartment/page";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export async function generateMetadata({ params }: { params?: { lng: "uz" | "en" } }, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const lang = params ? params.lng : mainLanguages


  return {
    title: localizationMain[lang]?.head?.title ?? "",
    description: localizationMain[lang]?.head?.description ?? "",
    keywords: localizationMain[lang]?.head?.keywords ?? "",
  }
}

export default function Home({ params }: { params?: { lng: "uz" | "en" } }) {
  const lang = params?.lng ? params.lng : mainLanguages
  const text = localizationMain[lang]
  // console.log("params",params);

  return (
    <div>
      <Header lng={lang} localizate={text?.header} />
      <main>
        <Banner localizate={text?.banner} />
        <ListDepartment lang={lang} localizate={text?.listDepartment} />
        <Diagrams localizate={text?.diagrams} />

      </main>
      <Footer localizate={text?.footer} />
    </div>
  )
}
