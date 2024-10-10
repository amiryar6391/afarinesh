import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';


import Teamcard from './teamcard';



export default function Team({teamInfos}){
   

    return(
        
        
        <section className=" container mx-auto mt-16 text-center">
            <h3 className=" text-2xl text-[#46533B] font-iransB mb-8">تیم مجرب ما</h3>
            <h1 className=" text-5xl text-greenD font-iransB mb-8 ">درمانگری را پیدا کنید که به شما کمک کند</h1>
            <p className=" mb-8 text-[#333333] text-base">
                درمان موثر بر پایه صداقت بنا شده است ، تیم پذیرش حرفه ای ما شما را با یک درمانگر هماهنگ می کند که تخصص، رویکرد درمانی و حتی شخصیت او بهترین تطابق برای شما است .داشتن یک تیم بزرگ و متنوع از متخصصان با تجربه به ما این امکان را می دهد که درمان شما را برای حمایت از نیازهای خاص شما تنظیم کنیم   
            </p>
            <div className=" flex flex-wrap">
            <Swiper
                        
                        spaceBetween={20}
                        speed={1200}
                        breakpoints={{
                            1200:{slidesPerView:4},
                            992:{slidesPerView:3},
                            768:{slidesPerView:2},
                            500:{slidesPerView:1}
                         }}
                        autoplay={{
                          delay: 2500,
                          pauseOnMouseEnter: true,
                        }}
                        
                        loop={true}
                        modules={[Autoplay]}
                    >
                        {teamInfos.map( (info) =>(
                            <SwiperSlide key={info._id} ><Teamcard {...info}/> </SwiperSlide>

                        ))}
                       

                        
                     </Swiper>


            </div>

        </section>
    )
}