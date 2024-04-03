'use client '
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


const page = async () => {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
          <div className="" style={{ paddingTop: "10rem" }}>
            <h2 className="text-2xl ">
              Admin page - welcome back {session?.user.username}
            </h2>
          </div>
        );
      } else { // Redirect to login page if not logged in
        return <div style={{paddingTop:'10rem'}}><p>Please login</p></div>; // Return nothing while redirecting
      }
    };
   

export default page;