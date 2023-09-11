import { currentProfile } from "@/lib/current-profile"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json()
        const profile = await currentProfile()

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
    } catch (error) {
        console.log('[SERVERS_POST]', error)

        return new NextResponse("Internal Error", { status: 500 })
    }
}