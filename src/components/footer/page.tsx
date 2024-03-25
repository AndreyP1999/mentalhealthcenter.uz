import { FooterComponent } from "@/interface/local/footerComponent";
import Image from "next/image";
import Link from "next/link";

export default function Footer({ localizate }: { localizate: FooterComponent }) {
    return (
        <footer className='bg-footer Open_Sans '>

            <div className='container grid grid-cols-1 lg:grid-cols-2 gap-y-6 mx-auto py-6'>
                <h2 className='col-span-full xl:text-3xl  md:text-2xl'>{localizate?.title}</h2>
                <article className='flex flex-col gap-6'>
                    <h3 className='text-xl'>{localizate?.contacts?.title}</h3>
                    <div className=' text-sm flex flex-col gap-6 '>
                        <p>{localizate?.contacts?.appeals}</p>
                        <p>{localizate?.contacts?.department}</p>
                        <p>{localizate?.contacts?.directorate}</p>
                        <p>{localizate?.contacts?.email}</p>
                        <p>{localizate?.contacts?.hours} </p>
                        <p>{localizate?.contacts?.passage}</p>
                        <p>{localizate?.contacts?.phone}</p>
                    </div>

                </article>
                <div className='  lg:justify-self-end  flex flex-col gap-6'>
                    <h3 >{localizate?.address}</h3>
                    <iframe style={{ aspectRatio: '384/200', maxWidth: "384px", width: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47899.78901669197!2d69.29995000225912!3d41.37980246995291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3cf54145d49%3A0xe5eae2819bd79d74!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LDQvdGB0LrQuNC5INCd0LDRgNC60L7Qu9C-0LPQuNGH0LXRgdC60LjQuSDQptC10L3RgtGAINCg0J3Qpg!5e0!3m2!1sru!2s!4v1693922718127!5m2!1sru!2s" width="384" height="200" frameBorder="0" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className='flex gap-3'>
                        <Link href="#">
                            <Image src="/icons/Facebook.svg" alt='facebook' width={16} height={16} />
                        </Link>
                        <Link href="#">
                            <Image src="/icons/instagram.svg" alt='instagram' width={16} height={16} />
                        </Link>
                        <Link href="#">
                            <Image src="/icons/twitter.svg" alt='twitter' width={16} height={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}