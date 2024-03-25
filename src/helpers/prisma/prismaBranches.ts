import { PrismaClient } from "@prisma/client"

import { NextResponse } from "next/server"


const prisma = new PrismaClient()

export class PrismaBranches {
    getAllBranches = async (lang: "ru" | "en" | "uz") => {
        switch (lang) {
            case "ru":
                return await prisma.branchesRU.findMany({ include: { contant: true }, orderBy: { id_branches: "asc" } })
            case "en":
                return await prisma.branchesEN.findMany({ include: { contant: true }, orderBy: { id_branches: "asc" } })

            case "uz":
                return await prisma.branchesUZ.findMany({ include: { contant: true }, orderBy: { id_branches: "asc" } })
        }
    }

    updateName = async (object: any) => {
        const { ru, uz, en, id_branches } = object
        if (!ru || !uz || !en) {
            return NextResponse.json({ message: "введите название компании на всех языках", data: `${ru} ${uz} ${en}` });
        }
        await Promise.all(
            [
                prisma.branchesRU.update({ data: { name: ru }, where: { id_branches } }),
                prisma.branchesUZ.update({ data: { name: uz }, where: { id_branches } }),
                prisma.branchesEN.update({ data: { name: en }, where: { id_branches } }),
            ]
        )
        return NextResponse.json({ message: "успешно" });
    }
    updateChief = async (object: any) => {
        const { ru, uz, en, id_branches } = object

        if (!ru || !uz || !en) {
            return NextResponse.json({ message: "введите ФИО на всех языках", data: `${ru} ${uz} ${en}` });
        }
        await Promise.all(
            [
                prisma.branchesRU.update({ data: { Chief: ru }, where: { id_branches } }),
                prisma.branchesUZ.update({ data: { Chief: uz }, where: { id_branches } }),
                prisma.branchesEN.update({ data: { Chief: en }, where: { id_branches } }),
            ]
        )
        return NextResponse.json({ message: "успешно" });
    }
    updateAddress = async (object: any) => {
        const { ru, uz, en, id_branches } = object

        if (!ru || !uz || !en) {
            return NextResponse.json({ message: "введите адрес на всех языках", data: `${ru} ${uz} ${en}` });
        }
        await Promise.all(
            [
                prisma.branchesRU.update({ data: { address: ru }, where: { id_branches } }),
                prisma.branchesUZ.update({ data: { address: uz }, where: { id_branches } }),
                prisma.branchesEN.update({ data: { address: en }, where: { id_branches } }),
            ]
        )
        return NextResponse.json({ message: "успешно" });
    }
    updateUrl = async (object: any) => {
        const { data, id_branches } = object
        if (data.length == 0) {
            return NextResponse.json({ message: "введите url-адрес" });
        }
        await Promise.all(
            [
                prisma.branchesRU.update({ data: { url: data }, where: { id_branches } }),
                prisma.branchesUZ.update({ data: { url: data }, where: { id_branches } }),
                prisma.branchesEN.update({ data: { url: data }, where: { id_branches } }),
            ]
        )
        return NextResponse.json({ message: "успешно" });
    }
    updatePhone = async (object: any) => {

        const { id_phone, data} = object
  
        if (data.length == 0) {
            return NextResponse.json({ message: "введите номер телефона на всех языках" });
        }
        await prisma.phoneBranche.update({ data: { phone: data }, where: { id_phone:Number(id_phone) } })
        return NextResponse.json({ message: "Hello World" });
    }
}