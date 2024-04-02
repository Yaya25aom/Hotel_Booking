
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const info = await db.informationGuest.findMany({
        include: {
           User: true
          
          }
    })
    return NextResponse.json(info)
}
