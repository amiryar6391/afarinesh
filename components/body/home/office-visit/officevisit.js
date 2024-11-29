import { IoMdTime } from "react-icons/io";
import { TiPhoneOutline } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";
import photo from "../../../../public/images/office-visit/office.webp";
import Image from "next/image";
import Link from "next/link";

export default function Officevisit() {
  return (
    <div className=" container mx-auto mt-24 grid grid-cols-12 gap-5 pb-20">
      <div className=" col-span-12 lg:col-span-6">
        <p className=" text-[#333333] text-2xl font-iransB mb-6 text-center md:text-right">
          به ما سر بزنید
        </p>
        <h1 className="text-greenD text-7xl font-iransB leading-snug text-center md:text-right">
          همه سزاوار مراقبت ویژه ما هستند
        </h1>
        <p
          className="text-[#333333] text-lg mt-5"
          style={{
            color: "#333333",
            fontSize: "18px",
            marginTop: "20px",
            lineHeight: "35px",
          }}
        >
          در آفرینش ما با کودکان،نوجوانان،والدین و دیگر اعضای خانواده از نزدیک کار می کنیم
          چه به دنبال درمان فردی یا زوجی باشید، چه به دنبال کمک برای خانواده یا
          فرزند خود، تیم روانشناس، روانپزشک و درمانگران مجرب ما برای کمک
          به شما اینجا هستند.
        </p>
        <ul className=" text-greenD mt-5">
          <li className=" mb-7 pb-6 flex items-center justify-between border-b border-greenD">
            <p>شنبه تا چهارشنبه</p>
            <div className=" flex items-center">
              <span className=" pl-1 pb-1">
                <IoMdTime size="20px" />
              </span>
              <p> 10:00 صبح - 8:00 شب</p>
            </div>
          </li>
          <li className=" pb-6 flex items-center justify-between border-b border-greenD">
            <p>پنجشنبه</p>
            <div className=" flex items-center">
              <span className=" pl-1 pb-1">
                <IoMdTime size="20px" />
              </span>
              <p>10:00 صبح - 2:00 ظهر</p>
            </div>
          </li>
        </ul>
      </div>
      <div className=" col-span-12 lg:col-span-6">
        <Image src={photo} alt="image office" priority />
        <div className=" flex justify-between mt-4">
          <h6 className=" font-iransB text-[#333333] flex items-center">
            <TiTickOutline size="25px" color="#88947C" /> دسترسی آسان
          </h6>
          <h6 className="font-iransB text-[#333333] flex items-center">
            <TiTickOutline size="25px" color="#88947C" />
            مرکز شهر یزد
          </h6>
          <h6 className="font-iransB text-[#333333] flex items-center">
            <TiTickOutline size="25px" color="#88947C" />
            محیطی آرام و باصفا
          </h6>
        </div>
        
         <div className=" text-left">
         <Link href="/contactus" className=" inline-block mt-10 ">
            <button className="flex justify-center items-center  w-40 h-11 text-xl border border-greenD rounded-3xl  text-greenD group">
              تماس با ما
              <span className="text-greenD pr-1 transition-all duration-1000 group-hover:-translate-x-4">
                <TiPhoneOutline size="20px" />
              </span>
            </button>
          </Link>
         </div>
        </div>
      </div>

  );
}
