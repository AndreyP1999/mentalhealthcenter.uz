
import { NextResponse } from "next/server"
import { resolve } from "path";
import { writeFile } from "node:fs/promises";
import { transcriptionEnRu } from "@/helpers/transcriptionEnRu";
import { generateHTML } from "@/helpers/generateHTML";
import mime from 'mime';
import { PrismaClient } from "@prisma/client";

// To handle a GET request to /api

import type { NextApiRequest, NextApiResponse } from 'next'




// To handle a POST request to /api
export async function POST(request: Request) {


  const allowedMimeTypes = [
    'application/msword', // для Word файлов
    'application/pdf', // для PDF файлов
    'application/vnd.ms-powerpoint', // для презентаций
  ];

  const data = await request.formData()


  const name = String(data.get("FileName"));
  const description = String(data.get("description"));
  const language = String(data.get("language"));
  const file = (data.get("thisFile")) as File;

  if (name.length != 0 && isAllowedFileType(file.name)) {
    const path = resolve('public', `${Date.now()}_${transcriptionEnRu(file.name)}`)
    const buffer = Buffer.from(await file.arrayBuffer());
    const url = `/${Date.now()}_${transcriptionEnRu(file.name)}`
    try {
      const res = await writeFile(path, buffer);
      const prisma = new PrismaClient()
      const info = await prisma.patients.create({
        data: {
          key_words: description,
          lang: language,
          title: name,
          url: url,
        }
      })
      return Response.json({ Message: "Success", status: 201 });
    } catch (error) {
      // console.log(error);

      return Response.json({ Message: error, status: 500 });
    }
  }
  else {
    return Response.json({ Message: "неправильный формат", status: 500 });
  }
}


function isAllowedFileType(filePath: string) {
  const allowedMimeTypes = [
    'application/msword', // для Word файлов
    'application/pdf', // для PDF файлов
    'application/vnd.ms-powerpoint', // для презентаций
  ];

  const fileMimeType = mime.getType(filePath);
  if (!fileMimeType) {
    return false;
  }
  return allowedMimeTypes.includes(fileMimeType);
}