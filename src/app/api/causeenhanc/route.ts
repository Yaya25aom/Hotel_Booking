
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const enhanc = await db.enhanc.findMany()
    return NextResponse.json(enhanc)
}
