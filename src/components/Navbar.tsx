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
    <nav className="bg-gray-300 py-4">
      <div className="container  flex items-center justify-between">
      
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <>
          <a href="#" className="hover:text-white">
  <img src="/assets/image/logo4.png" alt="logo" style={{ width: '200px', height: '200px' }} />
</a>

            <Link className={buttonVariants()} href='/front/ShowAccom'>
              Accommodation
            </Link>
            <Link className={buttonVariants()} href='/front/ShowExperience'>
              Facilities
            </Link>
            <Link className={buttonVariants()} href="/sign-in">
              Sign in
            </Link>


          </>
        )}


      </div>

      </nav >
    
    
   

  );
};

export default Navbar;
