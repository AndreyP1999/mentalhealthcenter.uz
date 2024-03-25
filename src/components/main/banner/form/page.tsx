"use client"

import { BannerComponent } from "@/interface/local/main/bannerComponents";
import TheButton from "@/UI/buttion/page";

function BannerForm({ localizate }: { localizate: BannerComponent }) {
    return (
        <form id="BannerForm" action="#" method="post" className="form">
            <div className=" flex flex-col gap-7 items-center px-4 xl:px-11 pt-6 xl:pb-8">
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl" > {localizate?.titie} </h3>
                <input type="text" placeholder="Ваше имя" className="inputForm w-full h-9" />
                <div className="flex flex-col-reverse sm:flex-row gap-7 w-full">
                    <input type="number" defaultValue="99890" className="inputForm h-9 grow" />
                   

                </div>
                <textarea placeholder="текст сообщения" className="textareaForm w-full hidden sm:block" name="" id="" >


                </textarea>
                <div className="self-end">
                    <TheButton text={localizate?.send} type="submit" />
                </div>
            </div>
        </form>
    );
}

export default BannerForm;