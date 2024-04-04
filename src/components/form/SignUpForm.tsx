'use client';

import { useForm } from 'react-hook-form';


import React, { useState } from 'react';

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
import GoogleSignInButton from '../GoogleSignInButton';
import { useRouter } from 'next/navigation'
import { toast, useToast } from '../ui/use-toast';

const FormSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    Title: z.string().min(1, 'Title is required').max(10),
    FirstName: z.string().min(1, 'First is required').max(100),
    LastName: z.string().min(1, 'LastName is required').max(100),
    PhoneNo: z.string().min(1, 'PhoneNo is required').max(100),
    Address: z.string().min(1, 'Address is required').max(100),
    City: z.string().min(1, 'City is required').max(100),
    Country: z.string().min(1, 'Country is required').max(100),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SignUpForm = () => {
  const router = useRouter();

 
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      Title: '',
      FirstName: '',
      LastName: '',
      PhoneNo: '',
      Address: '',
      City: '',
      Country: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/info_guest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        Title: values.Title,
        FirstName: values.FirstName,
        LastName: values.LastName,
        PhoneNo: values.PhoneNo,
        Address: values.Address,
        City: values.City,
        Country: values.Country,
        password: values.password
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
        <div className='space-y-2' style={{paddingTop:'23rem',paddingLeft:'8rem',paddingRight:'42rem'}}>
          <div className='mb-6'><h1 className='text-3xl'>WelCome to CaLisa Village</h1></div>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='mail@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Title'
            render={({ field }) => (
              <div className="w-full ">
                <label htmlFor="title" className="block text-sm  font-medium text-gray-700">Title</label>
                <select {...field} id="title" name="title" className="mt-1 block w-full pl-3 pr-10 py-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option value="option1">Mr.</option>
                  <option value="option2">Ms.</option>
                  <option value="option3">Mrs.</option>
                </select>
                <div className="mt-2 text-sm text-red-600" id="title-error"></div>
              </div>
            )}
          />

           <FormField
            control={form.control}
            name='FirstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>FirstName</FormLabel>
                <FormControl>
                <Input placeholder='johndoe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='LastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>LastName</FormLabel>
                <FormControl>
                <Input placeholder='Meesuk' {...field} />
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
                <FormLabel>PhoneNo</FormLabel>
                <FormControl>
                <Input type='tel' placeholder='66+' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='Address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                <Input type='text' placeholder='12/123' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='City'
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                <Input type='text'  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='Country'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                <Input type='text'  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
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
          Sign up
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
      <p className='text-center text-sm text-gray-600 mt-2'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-in'>
          Sign in
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
