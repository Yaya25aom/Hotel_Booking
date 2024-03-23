import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(
    request: Request,
    { params } : { params : { id: string} }
) {
    const emid = Number(params.id)
    const employee = await db.employee.findUnique({
        where: {
            Employee_Id: emid
        },
        include : {
            Role : true,
        }
    })
    if (!employee) {
        return  NextResponse.json("Employee not found", { status: 404 });
    }

    return NextResponse.json(employee);
}

export async function PUT(
    request: Request,
    { params } : { params: { id: number}}
){
    const { Employee_Id, Emfname, Emlname, Gender, PhoneNo, Email, Salary, Password } = await request.json()
    const id = Number(params.id)

    const updateEmployee = await db.employee.update({
        where: {
            Employee_Id: id
        },
        data: {
            Employee_Id,
            Emfname,
            Emlname,
            Gender,
            PhoneNo,
            Email,
            Salary,
            Password
        }
    })
    return NextResponse.json(updateEmployee)
}

export async function DELETE(
    request: Request,
    { params } : { params : { Employee_Id:number }}
    ) {
    const postEmployee_Id = Number(params.Employee_Id)
    const deletedEmployee = await db.employee.delete({
        where: {Employee_Id: postEmployee_Id}
    })
    return NextResponse.json(deletedEmployee)
}