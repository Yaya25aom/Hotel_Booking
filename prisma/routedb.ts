// // Import PrismaClient
// import { PrismaClient } from '@prisma/client';


// // Function to add an employee to the database
// async function addEmployee() {
//   try {
//     const employee = await new PrismaClient().employee.create({
//       data: {
//         Employee_Id: 10001,
//         Emfname: 'patchara',
//         Emlname: 'piyasakul',
//         Gender: 'Female',
//         PhoneNo: '0952435666',
//         Email: 'patchara@gmail.com',
//         Password: 'pat123456',
//         Salary: 25000,
//       },
//     });

//     console.log('Employee added:', employee);
//   } catch (error) {
//     console.error('Error adding employee:', error);
//   } finally {
//     // Disconnect the PrismaClient to free up resources
//     await new PrismaClient().$disconnect();
//   }
// }

// // Call the function to add an employee
// addEmployee();
