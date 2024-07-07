
import Image from "next/image";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

// export async function generateMetadata({ params }: { params?: { lng: "uz" | "en" } }, parent: ResolvingMetadata): Promise<Metadata> {
//     // read route params
//     const lang = params ? params.lng : mainLanguages
//     return {
//         title: localizationPatients[lang]?.head?.title ?? "",
//         description: localizationPatients[lang]?.head?.description ?? "",
//         keywords: localizationPatients[lang]?.head?.keywords ?? "",
//     }
// }

async function Branches({ params }: { params: { lng: "ru" | "uz" | "en" } }) {


    const revalidatedData = await fetch(`${process.env.HOST_NAME}/json/${params.lng}/branches.json`, {
        next: { revalidate: 20 },
    })
    const listTables = await revalidatedData.json();

    return (
        <>
            <Header lng={params.lng} />
            <main className="overflow-hidden">
                <section className="container mx-auto my-16 text-black relative">
                    <Image src='/image/Ellipse.svg' className="absolute -right-28 -top-8 -z-10" width={598} height={598} alt="" />

                    {listTables.map((table: any, index: number) => {
                       
                        return (
                            <div key={index} className="overflow-x-auto mb-16" style={{ borderRadius: "10px" }}>

                                <h2 className="font-bold uppercase  mb-7 text-center sm:text-2xl lg:text-4xl">{table.title}</h2>
                                <table className="min-w-full text-left font-light  IBM_Plex_Sans overflow-x-scroll capitalize" >
                                    <thead className=" text-2xl  font-bold ">
                                        <tr style={{ background: "#7AA2D5" }}>
                                            {Object.keys(table.thead).map((key: any, index: number) => {
                                                return <th key={index} className="px-6 py-4 border border-zinc-900 ">{table.thead[key]}</th>
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody className="text-lg">
                                        {table.tbody.map((rows: any, index: number) => {
                                            return (
                                                <tr className="h-8" style={{ background: (rows.id % 2 == 0) ? "#A5CCFF" : "rgb(255, 255, 255)" }} key={rows.id}>
                                                    {
                                                        Object.keys(table.thead).map((key: any, index: number) => {
                                                            return <td key={index} className="px-3 py-4 border border-zinc-900 font-medium ">{rows[key]}</td>
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}

                </section>
            </main>
            <Footer lng={params.lng} />
        </>

    );
}

/* {
                                                       <td className="px-3 py-4 border border-zinc-900 font-medium text-center">{el.id_branches}</td>
                                                       <td className="px-3 py-4 border border-zinc-900 "><a href={el.url}>{el.name}</a></td>
                                                       <td className="px-3 py-4 border border-zinc-900 ">{el.address}</td>
                                                       <td className="px-3 py-4 border border-zinc-900 "><a href={el.url}>{el.contant?.phone}</a></td>
                                                       <td className="px-3 py-4 border border-zinc-900 ">{el.Chief}</td> */

export default Branches;