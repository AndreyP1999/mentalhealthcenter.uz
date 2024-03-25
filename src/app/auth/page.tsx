'use client'
import style from "./style.module.css";

function Auth() {
    async function sendForm(form: HTMLFormElement) {
        const url = window.location.origin + "/api/authUser"
        if (form.login.value == "" || form.password.value == "") {
            return
        }
        console.log(form.login.value);
        
        const res = await fetch(url, { method: "POST", body: JSON.stringify({ password: form.password.value, login: form.login.value }) })
        const data = await res.json()
        console.log(data);
       if ( data.status=="success") {
    
        window.location.pathname="/adminPanel"

       }

    }

    return (
        <div className={style.container}>
            <div className={style.screen}>
                <div className={style.screen__content}>
                    <form className={style.login} onSubmit={(e) => { e.preventDefault(); sendForm(e.currentTarget) }}>
                        <div className={style.login__field}>

                            <input type="text" name="login" className={style.login__input} placeholder="логин" />
                        </div>
                        <div className="login__field">

                            <input type="password" name="password" className={style.login__input} placeholder="пароль" />
                        </div>
                        <button className={style.button + " " + style.login__submit}>
                            <span className={style.button__text}>войти</span>

                        </button>
                    </form>

                </div>
                <div className={style.screen__background}>
                    <span className={style.screen__background__shape + " " + style.screen__background__shape4}></span>
                    <span className={style.screen__background__shape + " " + style.screen__background__shape3}></span>
                    <span className={style.screen__background__shape + " " + style.screen__background__shape2}></span>
                    <span className={style.screen__background__shape + " " + style.screen__background__shape1}></span>
                </div>
            </div>
        </div>
    );
}

export default Auth;