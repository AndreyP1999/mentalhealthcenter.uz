import Link from "next/link";


export function Header({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <>
            <header className="h-4 flex justify-end py-4 px-2">
                <label htmlFor="burger-checkbox" className='cursor-pointer  w-10 h-7 flex flex-col justify-between [&>*]:border-black burder-animation'>
                    <span className='w-full block border border-solid'></span>
                    <span className='w-full block border border-solid'></span>
                    <span className='w-full block border border-solid'></span>
                </label>

            </header>
            <input type="checkbox" id="burger-checkbox" hidden />
            <div id="burger" className="overflow-y-scroll bg-gray-800 fixed top-0 self-stretch flex  grow flex-col pt-10 px-5 h-screen  -mx-44 w-0 overflow-hidden">
                {children}
            </div>


        </>
    );
}