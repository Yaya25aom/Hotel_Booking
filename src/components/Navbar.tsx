/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserAccountnav from './UserAccountnav';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='bg-blue-100 py-1 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <img src="/assets/image/logo4.png" alt="logo" style={{ width: '100px' }} />
        </Link>

        <div className="flex items-center space-x-40" style={{ paddingRight: '15rem', paddingLeft: '15rem', }}>
          <Link href='/front/ShowAccom' className="text-gray-800 text-lg hover:text-sky-600 transition duration-300">
            Accommodation
          </Link>
          <Link href='/front/ShowExperience' className="text-gray-800 text-lg hover:text-sky-600 transition duration-300">
            Facilities
          </Link>
          <Link href='/front/ShowGallery' className="text-gray-800 text-lg hover:text-sky-600 transition duration-300">
            Gallery
          </Link>
        </div>

        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Link href="/sign-in" className="bg-sky-900 text-lg text-white px-4 py-2 rounded hover:bg-sky-700 transition duration-300">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
