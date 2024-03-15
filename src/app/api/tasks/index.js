import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // READ ALL DATA
  if (req.method === 'GET') {
    const tasks = await prisma.employee.findMany();
    res.json(tasks);
  } 
  // CREATE DATA
  else if (req.method === 'POST') {
    const { title, description } = req.body;
    
    const newTask = await prisma.employee.create({
      data: {
        Emfname,
        Emlname,
        Gender,
        PhoneNo,
        Email,
        Password,
        Salary,
      },
    });

    res.json(newTask);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
