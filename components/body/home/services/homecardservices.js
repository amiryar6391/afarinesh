import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowLeft } from "react-icons/hi2";

export default function Homecardservices({
  bodyservicesimage,
  bodyservicestitle,
  bodyservicestext,
}) {
  return (
    <div className=" group/item  p-4">
      <div className=" text-center md:text-right">
      <Image src={bodyservicesimage} width={80} height={80} alt="image home services" className=" inline-block transition-all duration-1000 group-hover/item:-translate-y-4" />

      </div>

      
        <h2 className=" text-white text-3xl mb-5 font-iransB mt-5 text-center md:text-right ">{bodyservicestitle}</h2>
        <p className=" text-white text-justify text-lg">
          {bodyservicestext}
        </p>
      
      
      <Link href="/services">
        <button className="flex justify-start items-center  w-60 h-11 text-xl rounded-3xl text-white group/arrow  bg-transparent mt-9 transition-all duration-1000 group-hover/item:-translate-x-5">
          خواندن بیشتر
          <span className=" text-white pr-1 transition-all duration-1000 group-hover/arrow:-translate-x-4">
            <HiMiniArrowLeft size="20px" />
          </span>
        </button>
      </Link>
      
    </div>
  );
}
