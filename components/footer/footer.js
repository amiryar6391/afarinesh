import Image from "next/image";
import logo from '../../public/logo/Logo_Afarinesh.svg'
import { GiPlainCircle } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";




export default function Footer(){
    return(
        <footer className=" bg-[#f8f8f8] pb-10 mt-16">
            <div className=" container mx-auto grid grid-cols-12">
                <div className=" col-span-12 lg:col-span-4 md:col-span-6 mt-6 text-center">
                    <Image src={logo} width={90} height={90} alt="logo" className=" inline-block mx-auto"/>
                    <h1 className=" mt-9 mb-12 text-3xl font-iransB text-[#46533B] ">مرکز مشاوره عمومی آفرینش</h1>
                    <p className=" text-right text-greenD font-iransB mb-4">ما در آفرینش در کنار شما هستیم</p>
                    <p className=" text-left text-greenD font-iransB border-b pb-6">تا حال خوب را برای خود بیافرینید</p>
                    <p className=" flex items-center justify-center font-iransB  text-greenD mt-2">
                        ما را دنبال کنید : <a href="https://www.instagram.com/afarinesh.clinic.yazd/?igsh=dGVwYjFpZGZxajU4"><FaInstagram size='30px' className="text-[#46533B] pr-2"/></a>
                    </p>
                </div>
                <div className=" col-span-12 text-center lg:col-span-4 md:col-span-6">
                    <h1 className="text-[#46533B] text-2xl font-iransB mt-16 text-center">خدمات ما</h1>
                    <ul className=" xl:mr-40 lg:mr-32 md:mr-36 mt-9">
                        <li className=" mb-3 text-greenD font-iransB flex items-center"><GiPlainCircle size='17px' className=" text-[#46533B] pl-1" />بزرگسالان</li>
                        <li className=" mb-3 text-greenD font-iransB flex items-center"><GiPlainCircle size='17px' className=" text-[#46533B] pl-1" />کودکان و نوجوانان</li>
                        <li className=" mb-3 text-greenD font-iransB flex items-center"><GiPlainCircle size='17px' className=" text-[#46533B] pl-1" />سلامت محل کار</li>
                        <li className=" mb-3 text-greenD font-iransB flex items-center"><GiPlainCircle size='17px' className=" text-[#46533B] pl-1" />ارزیابی ها</li>
                        <li className=" mb-3 text-greenD font-iransB flex items-center"><GiPlainCircle size='17px' className=" text-[#46533B] pl-1" />گروه های پشتیبانی</li>
                        <li className=" mb-3 text-greenD font-iransB flex items-center"><GiPlainCircle size='17px' className=" text-[#46533B] pl-1" />خدمات اجتماعی</li>

                    </ul>
                </div>
                <div className=" col-span-12 text-center lg:col-span-4 md:col-span-6 md:text-right">
                <h1 className="text-[#46533B] text-2xl font-iransB mt-16">تماس با ما</h1>
                <p className="flex items-center mt-10 mb-6"><HiOutlineDevicePhoneMobile size='30px' className=" text-[#46533B] pl-1"/> : ۰۹۹۲۳۵۱۰۰۸۹</p>
                <div className=" flex items-start">
                    <span><GrLocation size='30px' className=" text-[#46533B] pl-1"/></span>
                    <p> : یزد - خیابان کاشانی - خیابان چمران - جنب بانک ملت و بانک مسکن - بن بست صادقیه - مرکز مشاوره آفرینش</p>

                </div>
                </div>

            </div>

        </footer>



    )
}