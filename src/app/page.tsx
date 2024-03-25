import Diagrams from "@/components/diagrams/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Banner from "@/components/main/banner/page";
import ListDepartment from "@/components/main/listDepartment/page";
import { mainLanguages } from "@/local/listLang";
import { localizationMain } from "@/local/main";
import { Metadata, ResolvingMetadata } from "next";
import Home from "./[lng]/page";

export async function generateMetadata(parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: localizationMain[mainLanguages]?.head?.title ?? "",
    description: localizationMain[mainLanguages]?.head?.description ?? "",
    keywords: localizationMain[mainLanguages]?.head?.keywords ?? "",
  }
}

export default Home
