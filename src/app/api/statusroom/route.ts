import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const roomType = await db.room.findMany({
        include:{
            RoomType : true,
        }
    })
    return Response.json(roomType)
}
export async function POST (request: Request) {
    const{ RoomNo, Status} = await request.json() 
   const newRoom = await db.room.create({
        data: {
           RoomNo,
           Status
        }
    })
    return Response.json(newRoom)
    
}
