'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { toast, useToast } from '../ui/use-toast';

const FormSchema = z
  .object({
    Employee_Id: z.number().min(1, 'EmployeeID is required').max(1000000),
    Emfname: z.string().min(1, 'Firstname is required').max(100),
    Emlname: z.string().min(1, 'Lastname is required').max(100),
    Gender: z.string().min(1,'Gender is required').max(10),
    PhoneNo: z.string().min(1, 'PhoneNumber is required').max(15),
    Email: z.string().min(1, 'Email is required').email('Invalid email'),
    Salary: z.number().min(1, 'Salary is required').max(1000000),
    Password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.Password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const Adminsignupform = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Employee_Id: 100000,
      Emfname: '',
      Emlname: '',
      Gender: '',
      PhoneNo: '',
      Email: '',
      Salary: 100000,
      Password: '',
      confirmPassword: '',
    },
  });
  

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Employee_Id: values.Employee_Id,
        Firstname: values.Emfname,
        Lastname: values.Emlname,
        Gender: values.Gender,
        PhoneNumber: values.PhoneNo,
        Email: values.Email,
        Salary: values.Salary,
        Password: values.Password,
      })
    })

    if(response.ok){
        router.push('/sign-in')
    } else{
      toast({
        title: "Error",
        description: "Oops! Something when wrong",
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className=''>
          <FormField
            control={form.control}
            name='Employee_Id'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee_ID</FormLabel>
                <FormControl>
                  <Input placeholder='000000-99999' type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Emfname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Emlname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='Gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='PhoneNo'
            render={({ field }) => (
              <FormItem>
                <FormLabel>PhoneNumber</FormLabel>
                <FormControl>
                  <Input type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='Email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='Salary'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='Password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Re-Enter your password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className='w-full mt-6' type='submit'>
          Submit
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
    
    </Form>
  );
};

export default Adminsignupform;
