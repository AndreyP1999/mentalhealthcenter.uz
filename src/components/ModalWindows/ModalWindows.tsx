import { Dispatch, ReactElement, useState } from "react";
export function ModalWindows({ Content, closeWindow, sendData = null }: { Content: ReactElement, closeWindow: Dispatch<boolean>, sendData: Function | null }) {

    function clickButtion(target: HTMLFormElement) {
        if (sendData != null) {
            sendData(target)
        }
        closeWindow(false)

    }
    return (<section className="fixed z-30 flex w-screen h-screen top-0 bg-slate-900 bg-opacity-50 left-0 justify-center items-center ">
        <form onSubmit={(e) => { e.preventDefault(); clickButtion(e.currentTarget); closeWindow(false) }} className="p-4 w-96 bg-white flex flex-col gap-4 justify-center items-center">
            {Content}
            <div className="flex justify-between">
                <button type="button" onClick={() => { closeWindow(false) }} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">закрыть</button>
              
            </div>
        </form>
    </section >
    )
}