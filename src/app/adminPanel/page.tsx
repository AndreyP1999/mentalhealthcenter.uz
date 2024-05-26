'use client'

import { useState } from "react";

function MainPage() {
    const [text, setText] = useState("нажмите для загрузки файла")
    const sendFile = async (form: HTMLFormElement) => {
        const body = new FormData();
        const host = window.location.origin
        body.set("FileName", form.text.value)
        body.set("thisFile", form.file.files[0]);
        body.set("description", form.description.value);
        body.set("language", form.language.value);

        const res = await fetch(`${host}/adminPanel/api/Patients/`, { body, method: "post" })
        const data = await res.json();

        if (data.status > 299) console.log("error", data)
        else alert("success")

    }
    const preventDefaults = (e: any) => { e.preventDefault(); e.stopPropagation(); }
    const filechange = (selectedFile: File) => {
        if (selectedFile) setText(selectedFile.name);
        else setText('Файл не выбран')
    };

    return (

        <section className="bg-gray-100 -z-20 absolute w-full  py-10  top-0 h-screen">
            <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-4">Форма для отправки файла</h2>
                <form
                    action="#"
                    onSubmit={e => { preventDefaults(e); sendFile(e.currentTarget) }}
                    method="POST"
                    encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Текст</label>
                        <input type="text" id="text" name="text" className="mt-1 p-2 block w-full border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700">язык</label>
                        <select id="language"
                            name="language"
                            defaultValue="all"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="all">all</option>
                            <option value="ru">ru</option>
                            <option value="uz">uz</option>
                            <option value="en">en</option>

                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Описание</label>
                        <textarea id="description" name="description"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700" >
                            <span>Файл</span>
                            <div
                                className="relative border-dashed border-2 border-gray-300 rounded-md p-6 flex justify-center items-center dropzone"
                            >
                                <span id="dropzone__text" className="text-gray-400">{text}</span>
                                <input
                                    onChange={(event) => {
                                        if (event.target.files) {
                                            filechange(event.target.files[0]);
                                        }
                                    }}
                                    type="file"
                                    id="file"
                                    name="file"
                                    className="hidden" />
                            </div>
                        </label>
                    </div>

                    <button type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Отправить</button>
                </form>
            </div >
        </section >
    );
}

export default MainPage;