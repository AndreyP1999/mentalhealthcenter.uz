import Link from "next/link";

export function Aside() {
    return (

        <>


            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc851de-9a93-4894-a28d-1109be3fb693?"
                className="aspect-[5.47] object-contain object-center w-[175px] overflow-hidden max-w-full ml-5 self-start max-md:ml-2.5"
            />
            <div className="text-slate-400 text-lg font-medium leading-5 uppercase whitespace-nowrap ml-5 mt-11 self-start max-md:ml-2.5 max-md:mt-10">
                Menu
            </div>

            <div className="flex w-[170px] max-w-full  items-start justify-between gap-5 mr-5 mt-4 self-end max-md:mr-2.5" />
            <div className="items-start self-center flex w-full flex-col mt-6">
                <Link className=" text-white items-start bg-gray-800 flex w-full gap-2.5 pl-4 pr-32 py-2 rounded self-end" href="/adminPanel/">  
                    Пациентам
              
                </Link>
                <Link className="text-white items-start bg-gray-800 flex w-full gap-2.5 pl-4 pr-32 py-2 rounded self-end" href="/adminPanel/Branches">
                  
                   
                        Филиалы
              
                </Link>
            </div>
            {/* <div className="flex flex-col  ">
                <div className="justify-between items-start bg-gray-800 self-center flex w-full gap-5 mt-1.5 pl-4 pr-3 py-2 rounded">
                    <div className="items-start self-stretch flex justify-between gap-2.5">
                
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Отделения -1
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa5b95-d5cb-4cbc-91b2-ce89984f4c9f?"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-center max-w-full my-auto"
                    />
                </div>
                <div className="ml-14">
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-white items-start bg-gray-800 flex w-full gap-2.5 pl-4 pr-32 py-2 rounded self-end">
                            Pages
                        </div>
                    </div>
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="justify-between items-start bg-gray-800 self-center flex w-full gap-2 mt-1.5 pl-4 pr-3 rounded">
                    <div className="items-start self-stretch flex justify-between gap-2.5">
                        
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Отделения -2
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa5b95-d5cb-4cbc-91b2-ce89984f4c9f?"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-center max-w-full my-auto"
                    />
                </div>
                <div className="ml-14">
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  ">
                <div className="justify-between items-start bg-gray-800 self-center flex w-full gap-5 mt-1.5 pl-4 pr-3 py-2 rounded">
                    <div className="items-start self-stretch flex justify-between gap-2.5">
                      
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Отделения -3
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afa5b95-d5cb-4cbc-91b2-ce89984f4c9f?"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-center max-w-full my-auto"
                    />
                </div>
                <div className="ml-14">
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                    <div className="items-start self-stretch flex  gap-2.5">
                        <div className="text-slate-200 text-base font-medium leading-6 self-stretch whitespace-nowrap">
                            Pages
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="items-start self-center flex w-full flex-col mt-6 text-slate-200">
                <Link className="items-start bg-gray-800 flex w-full gap-2.5 pl-4 pr-32 py-2 rounded self-end" href="adminPanel/constructorPage">
                    добавить Отделение
                </Link>
                <Link className="items-start bg-gray-800 flex w-full gap-2.5 pl-4 pr-32 py-2 rounded self-end" href="adminPanel/constructorPage">
                    добавить Подразделение
                </Link>


            </div>



        </>
    );
}