type AppProps = {
    text: string,
    loader?: boolean,
    type?: "button" | "submit" | "reset"
};

function TheButton({ text, loader = false, type = "button" }: AppProps) {
    return (
        <div className="main-btn">
            <button className="button" type={type} disabled={loader}>
                <span className="button__line"></span>
                <span className="button__line"></span>
                <span className="button__text">{text}</span>
                <span className="button__drow1"></span>
                <span className="button__drow2"></span>
            </button>
        </div>
    );
}

export default TheButton;