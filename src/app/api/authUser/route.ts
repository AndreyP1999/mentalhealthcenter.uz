
import { NextResponse } from "next/server"
import { resolve } from "node:path";
import { mkdir, createWriteStream } from "node:fs";
import { transcriptionEnRu } from "@/helpers/transcriptionEnRu";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { signJWT } from "@/helpers/jwt/signJWT";
export async function POST(request: Request) {



    try {
        const { login, password } = await request.json();

        const user = {
            id: "1",
            login: 2222,
            password: 2222,
        }
        if (login != user.login && password != user.password) {
            throw Error() 
        }
    


        const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN)

        const token = await signJWT(
            { sub: user.id },
            { exp: `${JWT_EXPIRES_IN}m` }
        );

        const tokenMaxAge = JWT_EXPIRES_IN * 60;
        const cookieOptions = {
            name: "token",
            value: token,
            httpOnly: true,
            path: "/",
            maxAge: tokenMaxAge,
        };

        const response = new NextResponse(
            JSON.stringify({
                status: "success",
                token,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );

        await Promise.all([
            response.cookies.set(cookieOptions),
            response.cookies.set({
                name: "logged-in",
                value: "true",
                maxAge: tokenMaxAge,
            }),
        ]);

        return response;
    } catch (error: any) {
        const response = new NextResponse(
            JSON.stringify({
                status: "error",

            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}


