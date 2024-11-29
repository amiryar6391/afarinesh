import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../../../public/images/hero/img-baner.webp";
import banner2 from "../../../../public/images/hero/2148759095.webp";
import banner3 from "../../../../public/images/hero/negaresh.webp";
import Image from "next/image";
import { TiPhoneOutline } from "react-icons/ti";
import { HiMiniArrowLeft } from "react-icons/hi2";
import Link from "next/link";

export default function Hero() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#88947C",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "15px",
        "--swiper-pagination-bullet-horizontal-gap": "4px",
      }}
      speed={1700}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className=" h-[584px]"
    >
      <SwiperSlide>
        <div className=' relative h-full w-full '>
            <Image src={banner1} fill  alt="banner1" priority className=" brightness-50 object-cover object-center" />
        </div>
        <div className=" absolute top-16 right-5  space-y-2 md:top-14 md:right-48 md:space-y-4 sm:top-16 sm:right-32 sm:space-y-3">
          <p className=" text-white text-center md:text-2xl sm:text-right  sm:text-xl">به آفرینش خوش آمدید</p>
          <p className=" text-white text-center  font-iransB leading-[50px] text-4xl md:leading-[75px] md:text-6xl sm:text-right sm:static sm:leading-[65px] sm:text-5xl">
            درمانی که بینش را <br />
            تقویت میکند
          </p>
          <p className=" text-white  leading-normal  md:text-xl md:leading-relaxed sm:text-xl sm:leading-relaxed">
          <br/>چه به دنبال درمان انفرادی یا زوجی  هستید ، چه به 
           <br/> دنبال کمک برای خانواده یا فرزند خود،تیم روانشناسان
            <br/>مجرب ما، روانپزشکان و درمانگران اینجا هستند تا به
            <br/>شما کمک کنند.
            </p>
          <div className=" flex flex-col items-center space-y-3 pt-6  md:space-x-5 md:space-x-reverse sm:flex-row sm:space-x-reverse sm:space-x-4 sm:space-y-0">
            <Link href="/contactus">
              <button className="btn-contact group">
                تماس با ما
                <span className="icon">
                  <TiPhoneOutline size="20px" />
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-more group">
                دیدن همه خدمات
                <span className="icon">
                  <HiMiniArrowLeft size="20px" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' relative h-full w-full  '>
            <Image src={banner2} fill alt="banner2" priority className=" brightness-50 object-cover object-center" />
        </div>
        <div className="  absolute top-16 right-5 space-y-2 md:top-14 md:right-48 md:space-y-4 sm:top-16 sm:right-32 sm:space-y-3">
          <p className=" text-white text-center  md:text-2xl  sm:text-xl sm:text-right">به آفرینش خوش آمدید</p>
          <p className=" text-white text-center  font-iransB leading-[50px] text-4xl md:leading-[75px] md:text-6xl sm:text-right sm:static sm:leading-[65px] sm:text-5xl">
            درمان از طریق
            <br /> همدلی و تخصص
          </p>
          <p className=" text-white leading-normal  md:text-xl md:leading-relaxed sm:text-xl sm:leading-relaxed">
            <br/>چه به دنبال درمان انفرادی یا زوجی  هستید ، چه به 
           <br/> دنبال کمک برای خانواده یا فرزند خود،تیم روانشناسان
            <br/>مجرب ما، روانپزشکان و درمانگران اینجا هستند تا به
            <br/>شما کمک کنند.
          </p>
          <div className=" flex flex-col items-center space-y-3 pt-6  md:space-x-5 md:space-x-reverse sm:flex-row sm:space-x-reverse sm:space-x-4 sm:space-y-0">
            <Link href="/contactus">
              <button className="btn-contact group">
                تماس با ما
                <span className="icon">
                  <TiPhoneOutline size="20px" />
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-more group">
                دیدن همه خدمات
                <span className="icon">
                  <HiMiniArrowLeft size="20px" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=' relative h-full w-full '>
           <Image src={banner3} fill alt="banner3" priority className=" brightness-50 object-cover object-center" />
        </div>
        <div className="  absolute top-16 right-5 space-y-2 md:top-14 md:right-48 md:space-y-4 sm:top-16 sm:right-32 sm:space-y-3">
          <p className=" text-white text-center  md:text-2xl  sm:text-xl sm:text-right">به آفرینش خوش آمدید</p>
          <p className=" text-white text-center font-iransB leading-[50px] text-4xl md:leading-[75px] md:text-6xl sm:text-right sm:static sm:leading-[65px] sm:text-5xl">
            مراقبت با کیفیت با <br /> کارشناسان خبره
          </p>
          <p className=" text-white  leading-normal  md:text-xl md:leading-relaxed sm:text-xl sm:leading-relaxed">
          <br/>چه به دنبال درمان انفرادی یا زوجی  هستید ، چه به 
           <br/> دنبال کمک برای خانواده یا فرزند خود،تیم روانشناسان
            <br/>مجرب ما، روانپزشکان و درمانگران اینجا هستند تا به
            <br/>شما کمک کنند.
          </p>
          <div className=" flex flex-col items-center space-y-3 pt-6  md:space-x-5 md:space-x-reverse sm:flex-row sm:space-x-reverse sm:space-x-4 sm:space-y-0">
            <Link href="/contactus">
              <button className="btn-contact group">
                تماس با ما
                <span className="icon">
                  <TiPhoneOutline size="20px" />
                </span>
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-more group">
                
                دیدن همه خدمات
                <span className="icon">
                  <HiMiniArrowLeft size="20px" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
