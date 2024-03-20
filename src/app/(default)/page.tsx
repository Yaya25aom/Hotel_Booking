import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import User from '@/components/User';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from 'next/link';
import Adminsignupform from '../../components/form/Adminsignupform';
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div>
        <div>
          <Image width={1280} height={853} alt="?" className="w-full h-[70vh]" src="/assets/image/banner.jpg" />
        </div>
        <div className="border-2 border-[#000000]">
          <div className="flex justify-center mt-16 mb-16 gap-5">
          <div className="text-center">
              <div className=" font-bold">
                Check In
              </div>
              <div>
                <Input type="datetime-local" className="" />
              </div>
            </div>
            <div className="text-center">
              <div className=" font-bold">
                Check Out
              </div>
              <div>
                <Input type="datetime-local" className="" />
              </div>
            </div>
            <div className="text-center self-end">
              <div>
                <Button>Book now!</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center">
          <div className="flex gap-5 p-10">
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.7427583427125!2d100.51335258231785!3d13.825338361008317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29bdada866347%3A0x3eb33dc3907bf583!2zTGFhIE1hIENhZmUgOjog4Lil4LiyIOC4oeC4siDguITguLLguYDguJ_guYggOjo!5e0!3m2!1sth!2sth!4v1710871709059!5m2!1sth!2sth" width="800" height="300"  loading="lazy" className=" rounded-lg shadow"></iframe>
            </div>
            <div className="w-full">
              <div className="shadow-lg p-6">
                    <p className="font-bold text-2xl">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                    <p> 1518 ถนนประชาราษฎร์ 1 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพมหานคร 10800</p>
                    <div className="mt-10">
                    <p>Contact Us. Tel: 099-999-9999</p>
                    <p>Line: ม จริง พรี่</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center p-2">
          &copy; copyright 2023 all rights Reserved
        </div>
      </div>
    </>
    // <div>
    //   <h1 className="text-4xl">Home</h1>
    //   <Link className={buttonVariants()} href = '/admin'>
    //     Open My admin
    //   </Link>
    //   <h2>Client session</h2>
    //   <User />
    //   <h2>Server session</h2>
    //   {JSON.stringify(session)}
    // </div>
  );
}



