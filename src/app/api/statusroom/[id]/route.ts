import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(
    request: Request,
    { params } : { params : { id: string} }
) {
    const id = Number(params.id)
    const room = await db.room.findUnique({
        where: {
            RoomNo: id
        },
        include : {
            RoomType : true,
        }
   
     
    })
    if (!room) {
        return  NextResponse.json("Employee not found", { status: 404 });
    }

    return NextResponse.json(room);
}
