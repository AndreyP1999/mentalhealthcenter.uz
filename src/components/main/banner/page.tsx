import { BannerComponent } from "@/interface/local/main/bannerComponents";
import Image from "next/image";
import BannerForm from "./form/page";

function Banner({ localizate }: { localizate: BannerComponent }) {
    return (
        <section className="my-5 Open_Sans relative">
            <div className="flex gap-5 container mx-auto justify-center xl:justify-evenly ">
                <BannerForm localizate={localizate}/>
                <figure className="hidden xl:flex min-h-fit  flex-col  justify-around  pt-5">
                    <Image width={478} height={478} className=" aspect-square" src='/logo.png' alt="logo" />
                    <figcaption className="text-center text-white text-2xl ">
                        <h3>14</h3>
                        <p>{localizate?.freeSeats}</p>
                    </figcaption>
                </figure>

            </div>
            <div className="bg-footer h-32 absolute bottom-0 w-full -z-20 box-border">

            </div>
        </section>
    );
}

export default Banner;