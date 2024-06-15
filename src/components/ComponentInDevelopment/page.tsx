import style from "./style.module.css";
export function ComponentInDevelopment({ children }: { children: React.ReactNode }) {
    return (
        <div className="aspect-video w-full overflow-hidden relative">
            <div className={style.container}>
                <div className=" flex justify-center items-center absolute  w-full h-full">
                    <h2 className="uppercase text-4xl font-bold text-blue-600">данный компонент в разработке</h2>
                </div>
            </div>
            {children}
        </div>
    )
}