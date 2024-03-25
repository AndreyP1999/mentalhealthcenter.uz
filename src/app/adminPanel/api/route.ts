
import { NextResponse } from "next/server"
import { resolve } from "node:path";
import { mkdir, createWriteStream } from "node:fs";
import { transcriptionEnRu } from "@/helpers/transcriptionEnRu";
import { generateHTML } from "@/helpers/generateHTML";
// To handle a GET request to /api


// To handle a POST request to /api
export async function POST(request: Request) {
  const { template, branches, divisions } = await request.json();

  const path = resolve('public', `${transcriptionEnRu(branches)}`)
  const fileName = resolve(path, `${transcriptionEnRu(divisions)}.html`)

  mkdir(path, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    } else {

      const stream = createWriteStream(fileName, { flags: 'w', encoding: 'utf8' })
      stream.once('open', (fd) => {
        const html = generateHTML(template.join(""), {
          title: "test 1 ",
          desc: "description",
          keyword: "keyword",
        })
        stream.write(html)
        // Important to close the stream when you're ready
        stream.end();
      });

    }
  });


  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}