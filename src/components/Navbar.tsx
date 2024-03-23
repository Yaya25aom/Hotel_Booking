/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountnav from './UserAccountnav';
import '@/styles/main.module.css'


const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=' bg-blue-100  py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
      <Link href='/'>
      <img className='w-20' src= '/assets/image/logo.jpeg' alt='Logo' />
        </Link>
        {session?.user ? (
          <UserAccountnav  />
        ) : (
          <Link className={buttonVariants()} href='/sign-in'>
            Sign in
          </Link>
        )}
         
        
      </div>
    </div>
  );
};

export default Navbar;
