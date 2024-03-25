function Headings({ level, text }: { level: number, text: string }) {
    const cl = "font-bold text-xl text-black uppercase text-center sm:text-2xl lg:text-3xl"
    switch (level) {
        case 1:
            return <h1 className={cl}>{text}</h1>;
        case 2:
            return <h2 className={cl}>{text}</h2>;
        case 3:
            return <h3 className={cl}>{text}</h3>;
        default:
            return <h4 className={cl}>{text}</h4>;

    }
}

export default Headings;