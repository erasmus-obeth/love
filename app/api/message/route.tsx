import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {

    const body = await req.json()

    const filePath = path.join(process.cwd(), "messages.json")

    let messages: any[] = []

    if (fs.existsSync(filePath)) {
        const file = fs.readFileSync(filePath, "utf8")
        messages = JSON.parse(file)
    }

    messages.push({
        message: body.message,
        date: new Date().toISOString()
    })

    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2))

    return NextResponse.json({ success: true })
}