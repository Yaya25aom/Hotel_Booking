import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountnav from './UserAccountnav';
import clsx from 'clsx';


const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <div className="flex gap-14">
          <Link href='/' className='self-center'>
            <HandMetal />
          </Link>
          <Link href="/" className="self-center">
            <div className={clsx("h-11 rounded-md px-8",buttonVariants())}>
              หน้าแรก
            </div>
          </Link>
          <Link href="/">
            <div className={clsx("dropdown ")}>
              <div tabIndex={0} role="button" className={clsx("h-11 rounded-md px-8",buttonVariants())}>รายละเอียดห้อง</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </Link>
        </div>
        <div>
          {session?.user ? (
            <UserAccountnav />
          ) : (
            <Link className={buttonVariants()} href='/sign-in'>
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
