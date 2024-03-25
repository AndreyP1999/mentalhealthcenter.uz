import Link from "next/link";
import data from "./testData";
import Image from "next/image";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { localizationMainPageRU } from "@/local/ru/main";
import { PrismaClient } from "@prisma/client";
import { PrismaBranches } from "@/helpers/prisma/prismaBranches";
async function Branches({ params }: { params: { lng: "ru" | "uz" | "en" } }) {

    const prisma = new PrismaBranches()

    const listBranches = await prisma.getAllBranches(params.lng)



    return (
        <>
            <Header lng={params.lng} localizate={localizationMainPageRU.header} />
            <main className="overflow-hidden">
                <section className="container mx-auto my-16 text-black relative">


                    <Image src='/image/Ellipse.svg' className="absolute -right-28 -top-8 -z-10" width={598} height={598} alt="" />
                    <h2 className="font-bold uppercase  mb-7 text-center sm:text-2xl lg:text-4xl">Структура учреждения</h2>
                    <div className="overflow-x-auto" style={{ borderRadius: "10px" }}>
                        <table className="min-w-full text-left font-light  IBM_Plex_Sans overflow-x-scroll" >
                            <thead className=" text-2xl  font-bold ">
                                <tr style={{ background: "#7AA2D5" }}>
                                    <th scope="col" className="px-6 py-4 border border-zinc-900">№</th>
                                    <th scope="col" className="px-6 py-4 border border-zinc-900">Название филиала</th>
                                    <th scope="col" className="px-6 py-4 border border-zinc-900">Адрес</th>
                                    <th scope="col" className="px-6 py-4 border border-zinc-900">Контакты</th>
                                    <th scope="col" className="px-6 py-4 border border-zinc-900">Главный врач</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                {listBranches.map(el => <tr className="h-8" style={{ background: (el.id_branches % 2 == 0) ? "#A5CCFF" : "rgb(255, 255, 255)" }} key={el.id_branches}>
                                    <td className="px-3 py-4 border border-zinc-900 font-medium text-center">{el.id_branches}</td>
                                    <td className="px-3 py-4 border border-zinc-900 "><a href={el.url}>{el.name}</a></td>
                                    <td className="px-3 py-4 border border-zinc-900 ">{el.address}</td>
                                    <td className="px-3 py-4 border border-zinc-900 "><a href={el.url}>{el.contant?.phone}</a></td>
                                    <td className="px-3 py-4 border border-zinc-900 ">{el.Chief}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Footer localizate={localizationMainPageRU.footer} />
        </>

    );
}

export default Branches;