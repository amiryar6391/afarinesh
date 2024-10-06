import Image from "next/image";
import logo from "../../../public/logo/Logo_Afarinesh.svg";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { FaPowerOff } from "react-icons/fa6";

export default function Sidebar() {

  const logOuthandler = async (e) =>{
    e.preventDefault()
    await signOut({
      redirect : true,
      callbackUrl : '/admin/login'
    })
  }


  return (
    <div className="min-h-[535px]  border rounded-lg shadow-md">
      <div className=" text-center mt-6">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className=" inline-block mb-3"
        />
        <p>با سلام مدیر عزیز!</p>
      </div>
      <ul className=" p-5 mt-5">
        <Link href='/dashboard/showComments'>
          <li className=" font-iransB mb-6 border-b pb-5">پیام ها</li>
        </Link>
        <Link href='/dashboard/colleagues'>
        <li className=" font-iransB mb-6 border-b pb-5">همکاران</li>

        </Link>
        <Link href='/dashboard/articles'>
        <li className=" font-iransB mb-6 border-b pb-5">مقاله ها</li>

        </Link>
        <Link href='/dashboard/services'>
        <li className=" font-iransB mb-6 border-b pb-5">خدمات</li>

        </Link>
        <Link href='/dashboard/changePass'>
        <li className=" font-iransB mb-6 border-b pb-5">تغییر رمز عبور</li>

        </Link>
        <li><button onClick={logOuthandler} className=" font-iransB flex justify-center items-center">خروج<span className=" pr-1"><FaPowerOff/></span></button></li>
      </ul>
      
    </div>
  );
}
