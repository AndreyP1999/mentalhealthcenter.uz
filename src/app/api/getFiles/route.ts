import { PrismaPatients } from "@/helpers/prisma/prismaPatients";
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { lang, text } = await request.json();
        const prisma = new PrismaPatients()
        // console.log(lang);

        const files = await prisma.getAllPatients(lang)
     
       
        const response = new NextResponse(
            JSON.stringify({
                status: "success",
                files
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
                error
            }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
        return response;
    }
}
