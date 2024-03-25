import { PrismaClient } from "@prisma/client"

import { NextResponse } from "next/server"


const prisma = new PrismaClient()

export class PrismaPatients {
    getAllPatients = async (lang: "ru" | "en" | "uz" | "all") => {
        return await prisma.patients.findMany({ where: { lang } })

    }


}