
import { HeaderComponent } from "@/interface/local/headerComponent";
import Image from "next/image";
import Link from "next/link";
import LangMenu from "./langmenu";
import { localizationHeader } from "@/local/header";
export default function Header({ lng }: { lng: "ru" | "en" | "uz" }) {

    return (
        <section>
            <input type="checkbox" id="burger-checkbox" hidden />
            <div id="burger" className='fixed z-20 top-0 min-h-screen  bg-blue-950  bg-opacity-80 text-2xl   text-white left-0 lg:hidden transition-all -mx-44 w-0 overflow-hidden'>
                <label className="absolute z-50 right-4 top-4 cursor-pointer" htmlFor="burger-checkbox">x</label>
                <div className="flex flex-col gap-6 px-11 py-8 ">
                    <WriteLinks key={1} lng={lng} localizationHeader={localizationHeader[lng]} />
                </div>

            </div>
            <header className='container mx-auto grid grid-cols-4 lg:grid-cols-12 gap-5 min-h-max text-sm sm:text-xl xl:text-2xl'>

                <Link href='./' className='lg:col-start-1 lg:col-end-3'>
                    <Image src='/logo.png' alt='logo' width={82} height={82} />
                </Link>
                <div className='xl:justify-self-center col-start-2 col-span-2  lg:col-start-3  lg:col-end-6 Roboto'>
                    <div className='flex flex-col gap-2 h-full justify-center'>
                        <Link href="tel:+998712000288">+99871-200-02-88</Link>
                        <Link href="mailto:vlad@htmlbook.ru">info@narcomedcenter.uz</Link>
                    </div>
                </div>
                <div className='justify-self-end flex items-center lg:col-end-13 '>
                    <div className='hidden lg:flex gap-6 items-center'>
                        <WriteLinks key={2} lng={lng} localizationHeader={localizationHeader[lng]} />

                    </div>

                    <label htmlFor="burger-checkbox" className='cursor-pointer lg:hidden w-10 h-7 flex flex-col justify-between [&>*]:border-black burder-animation'>

                        <span className='w-full block border border-solid'></span>
                        <span className='w-full block border border-solid'></span>
                        <span className='w-full block border border-solid'></span>
                    </label>
                </div>
            </header>
        </section>
    )
}
function WriteLinks({ localizationHeader, lng }: { localizationHeader: HeaderComponent, lng: "ru" | "en" | "uz" }) {


    return (
        <>

            <Link href={`/${lng}/`}>{localizationHeader?.Main}</Link>
            <Link href={`/${lng}/Patients1`}>{localizationHeader?.Patients}</Link>
            <Link href={`/${lng}/Branches`}>{localizationHeader?.Branches}</Link>
            <Link href={`/${lng}/Specialists`}>{localizationHeader?.Specialists}</Link>
            <LangMenu thisLang={lng} lang={localizationHeader?.lang} />

        </>
    )
}