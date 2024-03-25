type AppProps = {
    text: string,
    loader?: boolean,
    type?: "button" | "submit" | "reset"
};

function TheButton({ text, loader = false, type = "button" }: AppProps) {
    return (
        <div className="main-btn">
            <button className="button" type={type} disabled={loader}>
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">{text}</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </button>
        </div>
    );
}

export default TheButton;