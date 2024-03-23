import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod';


const userSchema = z.object({
  Employee_Id: z.number().min(1, 'EmployeeID is required').max(100000),
  Emfname: z.string().min(1, 'Username is required').max(100),
  Emlname: z.string().min(1, 'Lastname is required').max(100),
  Gender: z.string().min(1,'Gender is required').max(10),
  PhoneNo: z.string().min(1, 'PhoneNumber is required').max(15),
  Email: z.string().min(1, 'Email is required').email('Invalid email'),
  Salary: z.number().min(1, 'Salary is required').max(100000),
  Password: z.string().min(1, 'Password is required').min(8, 'Password must have more than 8 characters'),
});

export async function GET(){
  
    const employee = await db.employee.findMany({
      include: {
        Role : true
      }
    })
    return Response.json(employee)
  }

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { Employee_Id, Emfname, Emlname, Gender, PhoneNo, Email, Salary, Password } = userSchema.parse(body);

    // Check if the user with the given Employee_Id already exists
    const existingUserByEmployee_Id = await db.employee.findUnique({
      where: { Employee_Id: Employee_Id }
    });
    if (existingUserByEmployee_Id) {
      return NextResponse.json({ user: null, message: "User with this Id already exists" }, { status: 409 });
    }

    // Check if the user with the given Email already exists
    const existingUserByEmail = await db.employee.findUnique({
      where: { Email: Email }
    });
    if (existingUserByEmail) {
      return NextResponse.json({ user: null, message: "User with this email already exists" }, { status: 409 });
    }

    // Uncomment the following code to check if the user with the given username (Emfname) already exists
    // const existingUserByUsername = await db.employee.findUnique({
    //   where: { Emfname: Emfname }
    // });
    // if (existingUserByUsername) {
    //   return NextResponse.json({ user: null, message: "User with this username already exists" }, { status: 409 });
    // }

    const hashedPassword = await hash(Password, 8);

    // Create a new user
    const newUser = await db.employee.create({
      data: {
        Employee_Id,
        Emfname,
        Emlname,
        Gender,
        PhoneNo,
        Email,
        Salary,
        Password: hashedPassword
      }
    });

    // Omit the password from the response
    const { Password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: "Account created successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
  
}


