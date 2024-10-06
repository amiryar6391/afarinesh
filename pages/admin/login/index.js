import Link from "next/link";
import { useState } from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/router";


export default function LogIn(){

    // const router = useRouter()

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handler = async (e) => {
        e.preventDefault()
        const res = await signIn('credentials',{
            redirect : false,
            username,
            password
        })
        if(res.ok){
            window.location.href='/dashboard'
        }else{
            alert('اطلاعات نامعتبر!!')
        }

    }

    return(
        <div className=" bg-[#f8f8f8] w-screen h-screen flex flex-col justify-center items-center">
            <form onSubmit={handler} className=" shadow-lg rounded-lg p-5 w-[350px] h-[250px] bg-white">
                <div className=" flex flex-col">
                    <label className=" font-iransB mb-2 text-[#88947c]">نام کاربری:</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className=" focus:outline-none border rounded-lg h-8 p-2" dir="ltr"/>
                </div>
                <div className=" flex flex-col">
                    <label className=" font-iransB mb-2 mt-4 text-[#88947c]">رمز عبور:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className=" focus:outline-none border rounded-lg h-8 p-2 " dir="ltr"/>
                </div>
                <button type="submit" className=" font-iransB mt-7 border border-black px-3 py-1 rounded-lg text-[#88947c]">ورود</button>
            </form>
            <Link href='/' className=" flex justify-center items-center mt-4">بازگشت به سایت آفرینش <span className=" pr-1"><HiMiniArrowLeft/></span></Link>
            
        </div>
    )
}