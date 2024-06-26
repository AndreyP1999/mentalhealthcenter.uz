'use client'

import { Patients } from "@prisma/client"
import { useEffect, useState } from "react"
import { Filter } from "./Filter"
interface MainContentProps {
    params: { lng: "ru" | "uz" | "en" },
    title: string,
    file_name: string,
    find: string,
    upload_date: string,
    download: string
}
export function MainContent({ params, title, file_name, find, upload_date, download }: MainContentProps) {


    const [files, setFiles] = useState<Patients[]>([])
    const [lang, setLang] = useState("all")
    const [text, setText] = useState("")
    useEffect(() => {
        fetch("/api/getFiles", {
            method: "POST",
            body: JSON.stringify({ lang, text })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFiles(data.files)
            })
    }, [lang, text])
    return (
        <>
            <div className="  flex justify-center items-center">
                <div className="container mx-auto rounded-lg p-14">
                    <Filter
                        setLang={setLang}
                        setText={setText}
                        lang={lang}
                        text={text}
                        title={title}
                        file_name={file_name}
                        find={find}
                    />
                </div>
            </div>
            <div className="items-center flex w-full justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-indigo-300 text-xl font-bold tracking-tight grow whitespace-nowrap my-auto"> № </div>
                <div className="bg-blue-500 self-stretch flex w-full items-center justify-between gap-5 pl-6 pr-3 py-3 rounded-md max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                    <div className="flex items-stretch justify-between gap-5 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.3999 8.06678H24.1179V5.58469C24.1179 4.90026 23.5429 4.34365 22.8358 4.34365H14.5025C14.3525 4.34365 14.2076 4.29277 14.0922 4.20031L10.4243 1.24104H2.964C2.25695 1.24104 1.68195 1.79765 1.68195 2.48209V6.82574H25.3999V8.06678H1.68195H0.399902V2.48209C0.399902 1.11322 1.5499 0 2.964 0H10.6563C10.8063 0 10.9512 0.0508828 11.0666 0.14334L14.7345 3.10261H22.8358C24.2499 3.10261 25.3999 4.21582 25.3999 5.58469V8.06678Z" fill="white" />
                            <rect y="6" width="27" height="18" rx="2" fill="white" />
                        </svg>
                        <div className="text-white text-sm tracking-tight self-center ">
                            {file_name}
                        </div>
                    </div>
                    <div className="self-stretch flex justify-between gap-5 items-start w-96 ">
                        <div className="justify-between items-center flex gap-2.5 mt-2 py-2 ">
                            <div className="text-white ">
                                {upload_date}
                            </div>
                            <div className="items-center flex basis-[0%] flex-col self-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
                                    <path d="M1.08711 3.5L4.91289 3.5C5.34007 3.5 5.57052 2.99894 5.29252 2.6746L3.37963 0.442899C3.18008 0.210094 2.81992 0.210094 2.62037 0.442899L0.707482 2.6746C0.429479 2.99894 0.659934 3.5 1.08711 3.5Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
                                    <path d="M4.91289 0.5H1.08711C0.659934 0.5 0.429479 1.00106 0.707482 1.3254L2.62037 3.5571C2.81992 3.78991 3.18008 3.78991 3.37963 3.5571L5.29252 1.3254C5.57052 1.00106 5.34007 0.5 4.91289 0.5Z" fill="#8E8E8E" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {files.map((el, index) => {
                return (
                    <div key={el.id_patients} className="items-center flex w-full justify-between gap-5 mt-2.5 px-5 py-px max-md:max-w-full max-md:flex-wrap">
                        <div className="text-indigo-300 text-xl font-bold tracking-tight grow whitespace-nowrap my-auto">
                            {index + 1}
                        </div>
                        <div className="border bg-white self-stretch flex w-full items-center justify-between gap-5 pl-6 pr-3.5 py-3 rounded-md border-solid border-slate-200 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                            <div className="flex items-stretch justify-between gap-5 my-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25" fill="none">
                                    <g clipPath="url(#clip0_552_36)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M25 8.06678H23.7179V5.58469C23.7179 4.90026 23.1429 4.34365 22.4359 4.34365H14.1026C13.9526 4.34365 13.8077 4.29277 13.6923 4.20031L10.0244 1.24104H2.5641C1.85705 1.24104 1.28205 1.79765 1.28205 2.48209V6.82574H25V8.06678H1.28205H0V2.48209C0 1.11322 1.15 0 2.5641 0H10.2564C10.4064 0 10.5513 0.0508828 10.6667 0.14334L14.3346 3.10261H22.4359C23.85 3.10261 25 4.21582 25 5.58469V8.06678Z" fill="#4676FB" stroke="white" strokeWidth="0.2" />
                                        <rect y="6" width="27" height="18" rx="2" fill="#E0EEFD" stroke="#ADC0F8" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_552_36">
                                            <rect width="27" height="25" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="text-blue-500 text-sm tracking-tight self-center grow whitespace-nowrap my-auto">
                                    {el.title}
                                </div>
                            </div>
                            <div className="justify-between items-center flex gap-2.5 mt-2 py-2 w-96 ">
                                <div className=""> {el.lang}</div>
                                <a href={'/files/' + el.url} download>
                                    <button className="bg-blue-500 text-white text-base rounded-lg px-4 py-2 font-thin"> {download}</button>
                                </a>

                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}