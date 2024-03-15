'use client'
import { db } from "@/lib/db";
export async function GET(){
    const room = await db.room.findMany()
    return Response.json(room)
}