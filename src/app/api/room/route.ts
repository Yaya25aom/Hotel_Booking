import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const roomType = await db.roomType.findMany()
    return Response.json(roomType)
}
export async function POST (request: Request) {
    const{ RoomType_Id, RoomType_name, RoomType_size, RoomType_bed, RoomType_guest, RoomPrice, DefalutRoomPrice, RoomTypeDescrip} = await request.json() 
   const newRoomType = await db.roomType.create({
        data: {
            RoomType_Id,
            RoomType_name,
            RoomType_size,
            RoomType_bed,
            RoomType_guest,
            RoomPrice,
            DefalutRoomPrice,
            RoomTypeDescrip
        }
    })
    return Response.json(newRoomType)
    
}
