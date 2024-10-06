import Image from "next/image"
import photo from '../../public/images/services/dast.jpg'
import { HiMiniArrowLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Link from "next/link";




export default function Services(){

    const [services , setServices] = useState([])

    const getServices = async () => {
        const res = await fetch('/api/services')
        const data = await res.json()
        setServices(data)
    }

    useEffect(() =>{

        getServices()

    },[])
    return(
        <section>
            <div className=' relative h-[350px] md:h-[50vh]'>
                 <Image src={photo} fill alt='image services' priority className="brightness-75 saturate-150"  />
            </div>
            <div className=" container mx-auto mt-24">
                <p className=" text-center text-[#46533B] text-xl font-iransB mb-8 md:text-right">خدمات ما</p>
                <h1 className=" text-center text-[#88947C] text-4xl font-iransB mb-6 md:text-right">شادی و سعادت از اینجا شروع می شود</h1>
                <p className=" text-[#46533B] text-lg">هدف ما ارائه بهترین پشتیبانی ممکن برای افراد، زوج‌ها، خانواده‌ها و گروه‌هایی است که با مشکلات روانی، رفتاری یا عاطفی مواجه هستند</p>
                <div className=" grid grid-cols-12 gap-3 mt-10 ">

                    {
                        services.map((service) => (
                            <div className=" col-span-12 lg:col-span-3 md:col-span-6  group/item" key={service._id}>
                                <div className=" h-80 border shadow-lg rounded-md flex flex-col justify-center items-center transition-all duration-1000  group-hover/item:bg-greenD">
                                    <div className=" flex flex-col justify-center items-center transition-all duration-700  group-hover/item:hidden ">
                                        <Image src={`data:${service.image.contentType};base64,${Buffer.from(service.image.url.data).toString('base64')}`} width={200} height={200} alt="services"  />
                                        <p className=" font-iransB text-[#88947C] mt-3">{service.title}</p>
                                    </div>
                                    <div className=" hidden group-hover/item:block ">
                                       <Link href={`/services/${service._id}`}>
                                            <button className="flex justify-center items-center w-60 h-11 text-xl border border-white rounded-3xl text-white group/btn ">
                                                مطالعه بیشتر
                                                <span className="text-white pr-1 transition-all duration-1000 group-hover/btn:-translate-x-4">
                                                <HiMiniArrowLeft size="20px" />
                                                </span>
                                            </button>
                                       </Link>
                                    </div>
                                 </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>



    )
}