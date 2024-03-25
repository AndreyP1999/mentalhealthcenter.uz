"use client"

import { useState } from "react";

export function Fillter({ title, file_name, find }: { title: string, file_name: string, find: string }) {

    return (
        <form>
            <h1 className="text-center font-bold text-3xl  mb-5 uppercase">
                {title}
            </h1>

            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between ">
                <input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder={file_name} />
                <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                    <select
                        onChange={(e) => { window.location.search = `lang=${e.target.value}` }}
                        id="Com"
                        className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg" 
                        defaultValue="all">

                        <option value="ru">ru </option>
                        <option value="uz">uz </option>
                        <option value="en">en </option>
                    </select>
                    <button className="bg-blue-500 text-white text-base rounded-lg px-4 py-2 font-thin"> {find}  </button>
                </div>
            </div>
        </form>
    );
}

