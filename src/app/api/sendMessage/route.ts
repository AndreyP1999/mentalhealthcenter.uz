import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { userName, phone, text } = await request.json();
        if (!userName || !phone || !text) {
            throw Error("заполните все поля")
        }
        const url = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`
        let message = `<b>имя - ${userName}</b>\n`
        message += `<b>телефон - ${phone}</b>\n`
        message += `<b>сообщение - ${text}</b>\n`
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(
                {
                    text: message,
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    parse_mode: "HTML"
                })
        })
        const data = await res.json();
        if (!data.ok) {
            throw Error("error: " + data.description)
        }
        let response = new NextResponse(
            JSON.stringify({
                status: "success",
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
        return response;




    } catch (error: any) {

        const response = new NextResponse(
            JSON.stringify({
                status: "error",
                message: error,
            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
        return response;
    }
}
