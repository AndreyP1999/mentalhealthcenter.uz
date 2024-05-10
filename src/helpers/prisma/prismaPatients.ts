import { PrismaClient } from "@prisma/client"

import { NextResponse } from "next/server"


const prisma = new PrismaClient()

export class PrismaPatients {
    getAllPatients = async (lang: "ru" | "en" | "uz" | "all") => {
     
        
        if (lang == "all") {
            return await prisma.patients.findMany()
        }
        return await prisma.patients.findMany({ where: { lang } })

    }


}