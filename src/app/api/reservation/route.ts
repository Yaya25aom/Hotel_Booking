
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const reserve = await db.reservation.findMany({
        include: {
            Room : ({
                include : {
                    RoomType : true,
                }
            }),
            Hotel : true,
            Enhanc : true,
            informationGuest : true,
            
          }
    })
    return NextResponse.json(reserve)
}
