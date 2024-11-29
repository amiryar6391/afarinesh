import Image from "next/image";
import { TiTickOutline } from "react-icons/ti";
import { HiMiniArrowLeft } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import photo1 from "../../../../public/images/introduction/2149280820.webp";
import Link from "next/link";
import { useEffect } from "react";

export default function Introduce() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className=" mt-20">
      <div className=" container mx-auto">
        <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12  lg:col-span-6">
            <Image
              src={photo1}
              alt="imageintroduce"
              priority
            
            />
          </div>
        <div className=" col-span-12 lg:mx-auto lg:col-span-6">
            <h1
              className=" font-iransB text-4xl text-greenD"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              مرکز مشاوره عمومی آفرینش
            </h1>
            <p
              className=" font-iransB text-xl mt-6 mb-5"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              ما در آفرینش در کنار شما هستیم ، تا حال خوب را برای خود بیافرینید
            </p>
            <hr />
            <p className=" flex items-center mt-5 text-xs md:text-base ">
              <TiTickOutline size="25px" color="#88947C" /> مشاوره زوج و زوج
              درمانی{" "}
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> مشاوره پیش از ازدواج
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> توسعه فردی(مدیریت
              خشم ، تفکر نقاد ، حل مسعله و... )
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> بازی درمانی(بیش
              فعالی ، توجه و تمرکز ، اوتیسم ، تاخیر رشدی و ...)
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> درمان افسردگی ،
              اضطراب ، وسواس و سایر مشکلات روانشناختی
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" />
              درمان اختلالات یادگیری(خواندن ، نوشتن ، ریاضی)
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> مشاوره کودک ، نوجوان
              و خانواده
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" />
              مشاوره تحصیلی (تمام پایه ها) و انتخاب رشته (پایه نهم و دوازدهم)
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> روانکاوی{" "}
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> تست رغبت شغلی{" "}
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> تست هوش ، شخصیت ،
              وکسلر ، بینه{" "}
            </p>
            <p className=" flex items-center mt-5 text-xs md:text-base">
              <TiTickOutline size="25px" color="#88947C" /> تست AV12 برای تشخیص
              بیش فعالی و آیتم های دقت و تمرکز
            </p>

            <Link href="/services">
              <button className="btn-more group mt-10 mr-6">
                {" "}
                دیدن همه خدمات{" "}
                <span className="icon">
                  <HiMiniArrowLeft size="20px" />
                </span>
              </button>
            </Link>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}
