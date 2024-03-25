
import { NextResponse } from "next/server"
import { resolve } from "node:path";
import { mkdir, createWriteStream } from "node:fs";
import { transcriptionEnRu } from "@/helpers/transcriptionEnRu";
import { generateHTML } from "@/helpers/generateHTML";
import { PrismaClient } from "@prisma/client";
import { PrismaBranches } from "@/helpers/prisma/prismaBranches";
// To handle a GET request to /api
const branches = new PrismaBranches()
// To handle a POST request to /api
export async function PUT(request: Request) {
    const { object } = await request.json();
    const id_branches = Number(object.id_branches) ?? null
    if (!id_branches) {
        return NextResponse.json({ message: "нет id_branches" });
    }
    const colName = object.colName ?? 'empty'
    const prisma = new PrismaClient()
  

    switch (colName) {
        case "name":
            return await branches.updateName(object);
        case "address":
            return await branches.updateAddress(object);
        case "phone":
            return await branches.updatePhone(object);
        case "Chief":
            return await branches.updateChief(object);
        case "url":
            return await branches.updateUrl(object);

        default:
            return NextResponse.json({ message: "Hello World 11" });
    }
}
export async function POST(request: Request) {
    const { type, data } = await request.json();

    switch (type) {

        case "insert":

            break;
        case "dalete":

            break;
        default:
            return;
    }



    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
