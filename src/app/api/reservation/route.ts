
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const reserve = await db.reservation.findMany({
        include: {
            Room : true,
            Hotel : true
          
          }
    })
    return NextResponse.json(reserve)
}
