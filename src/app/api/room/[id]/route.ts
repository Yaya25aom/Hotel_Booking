import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(
    request: Request,
    { params } : { params : { id: string} }
) {
    const id = Number(params.id)
    const roomType = await db.roomType.findUnique({
        where: {
            RoomType_Id: id
        }
    })
    if (!roomType) {
        return  NextResponse.json("Employee not found", { status: 404 });
    }

    return NextResponse.json(roomType);
}
