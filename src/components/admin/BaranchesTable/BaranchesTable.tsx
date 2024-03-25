'use client'

import { ModalWindows } from "@/components/ModalWindows/ModalWindows";
import Link from "next/link"
import { useState } from "react"

export function BaranchesTable({ listBranches }: { listBranches: any[] }) {
 
    
    const [isShowModal, setShowModal] = useState(false)
    const [Content, setContent] = useState(<></>)
    function changeDataInTable(el: HTMLElement) {
        const type = el.getAttribute("data-type")
        const id_branches = Number(el.getAttribute("data-id"))
        let content = <></>
        const id_phone = Number(el.getAttribute("data-id-phone"))
        switch (type) {
            case "name": content = <>
                <h2>Изменить название филиала</h2>
                <input type="text" hidden name="colName" defaultValue={type} />
                <input type="number" hidden name="id_branches" defaultValue={id_branches} />

                <input type="text" name="ru" placeholder="ru" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="uz" placeholder="uz" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="en" placeholder="en" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </>
                break;
            case "phone": content = <>
                <h2>Изменить номер тел.</h2>
                <input type="text" hidden name="colName" defaultValue={type} />
                <input type="text" hidden name="id_phone" defaultValue={id_phone} />
                <input type="number" hidden name="id_branches" defaultValue={id_branches} />

                <input type="text" name="data" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </>
                break;
            case "Chief": content = <>
                <h2>Изменить фио главного врача </h2>
                <input type="text" hidden name="colName" defaultValue={type} />
                <input type="number" hidden name="id_branches" defaultValue={id_branches} />

                <input type="text" name="en" placeholder="en" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="ru" placeholder="ru" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="uz" placeholder="uz" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

            </>


                break;
            case "address": content = <>
                <h2>Изменить Адрес </h2>

                <input type="text" hidden name="colName" defaultValue={type} />
                <input type="number" hidden name="id_branches" defaultValue={id_branches} />
                <input type="text" name="ru" placeholder="ru" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="uz" placeholder="uz" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="text" name="en" placeholder="en" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </>

                break;
            case "url": content = <>
                <h2>Изменить ссылку</h2>
                <input type="text" hidden name="colName" defaultValue={type} />
                <input type="number" hidden name="id_branches" defaultValue={id_branches} />
                <input type="text" name="data" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </>
                break;
            default:
                return;
        }
        setContent(content)
        setShowModal(true)
    }
    async function sendData(form: HTMLFormElement) {
        const url = window.location.origin + "/adminPanel/api/Baranches"
        const formData = new FormData(form)
        let formDataObject = Object.fromEntries(formData.entries());
        const res = await fetch(url, {
            method: "PUT", body: JSON.stringify({ object: formDataObject })
          
        })
        console.log(await res.json());
        
    }
    return <>
        {isShowModal ? <ModalWindows closeWindow={setShowModal} Content={Content} sendData={sendData} /> : null}
        <table className="min-w-full text-left font-light  IBM_Plex_Sans overflow-x-scroll" >
            <thead className=" text-2xl  font-bold ">
                <tr style={{ background: "#7AA2D5" }}>
                    <th scope="col" className="px-6 py-4 border border-zinc-900">№</th>
                    <th scope="col" className="px-6 py-4 border border-zinc-900">Название филиала</th>
                    <th scope="col" className="px-6 py-4 border border-zinc-900">Адрес</th>
                    <th scope="col" className="px-6 py-4 border border-zinc-900">Контакты</th>
                    <th scope="col" className="px-6 py-4 border border-zinc-900">Главный врач</th>
                    <th scope="col" className="px-6 py-4 border border-zinc-900">изменить ссылку</th>
                </tr>
            </thead>
            <tbody className="text-lg" onClick={(e) => { e.altKey ? changeDataInTable(e.target as HTMLElement) : null }} >
                {listBranches.map(el => (
                    <tr className="h-8" style={{ background: (el.id_branches % 2 == 0) ? "#A5CCFF" : "rgb(255, 255, 255)" }} key={el.id_branches}>
                        <td className="px-3 py-4 border border-zinc-900 font-medium text-center">{el.id_branches}</td>
                        <td className="px-3 py-4 border border-zinc-900 " data-type="name" data-id={el.id_branches}>{el.name}</td>
                        <td className="px-3 py-4 border border-zinc-900 " data-type="address" data-id={el.id_branches}>{el.address}</td>
                        <td className="px-3 py-4 border border-zinc-900 " data-type="phone" data-id-phone={el.id_phone} data-id={el.id_branches}>{el.contant?.phone}</td>
                        <td className="px-3 py-4 border border-zinc-900 " data-type="Chief" data-id={el.id_branches}>{el.Chief}</td>
                        <td className="px-3 py-4 border border-zinc-900 " data-type="url" data-id={el.id_branches}>изменить</td>
                    </tr>)
                )}
            </tbody>
        </table>
        <div className="flex justify-between my-5">
            <button className="text-white bg-gradient-to-br from-blue-300 to-blue-600 focus:ring-4 focus:ring-blue-900 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">добавить филиал</button>
            <button className="text-white bg-gradient-to-br from-red-300 to-red-600 focus:ring-4 focus:ring-red-900 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">удалить филиал</button>

        </div>
    </>
}