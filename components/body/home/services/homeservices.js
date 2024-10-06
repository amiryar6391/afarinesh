import Image from 'next/image'
import photo from '../../../../public/images/body-services/hero1.jpg'
import image1_body_services from '../../../../public/images/body-services/ser1.svg'
import image2_body_services from '../../../../public/images/body-services/ser2.svg'
import image3_body_services from '../../../../public/images/body-services/ser3.svg'
import image4_body_services from '../../../../public/images/body-services/ser4.svg'
import image5_body_services from '../../../../public/images/body-services/ser5.svg'
import image6_body_services from '../../../../public/images/body-services/ser6.svg'
import Homecardservices from './homecardservices'
import styles from './homeservices.module.css'


export default function Homeservices(){

    let bodyservicesitems=[

        {id:1,bodyservicesimage: image1_body_services , bodyservicestitle:'بزرگسالان' , bodyservicestext:'ما طیف وسیعی از نگرانی‌های سلامت روان مانند افسردگی، اضطراب، حملات پانیک، اختلالات شخصیت و بسیاری موارد دیگر را درمان می‌کنیم. برنامه های درمانی به طور خاص توسعه می یابد'},
        {id:2,bodyservicesimage: image2_body_services , bodyservicestitle:'کودکان و نوجوانان' , bodyservicestext:'ما با کودکان و نوجوانانی کار می‌کنیم که در طیف وسیعی از مسائل مانند اضطراب ، خلق‌وخو ضعیف ، نگرانی‌های مربوط به خوردن و تصویر بدن ، بازی یا اینترنت به حمایت نیاز دارند…'},
        {id:3,bodyservicesimage: image3_body_services , bodyservicestitle:'سلامت محل کار' , bodyservicestext:'سلامتی در محل کار اختیاری نیست شادابی روان برای حفظ نیروی کار شاد و مولد در هر سازمانی با عملکرد بالا ضروری است که در آفرینش کارشناسان ما رویکرد مناسب را به شما نشان میدهند.'},
        {id:4,bodyservicesimage: image4_body_services , bodyservicestitle:'ارزیابی ها' , bodyservicestext:'ارزیابی‌های روان‌شناختی بخش کلیدی شناخت خود، فرزند یا نوجوانتان است. توسط روانشناسان ما با استفاده از روشهای معتبر و شناخته شده بین المللی انجام می شود'},
        {id:5,bodyservicesimage: image5_body_services , bodyservicestitle:'گروه های پشتیبانی' , bodyservicestext:'گروه‌های حمایتی و گروه‌درمانی ممکن است برای همه مناسب نباشند اما برای برخی، راه نجاتی هستند که طیفی ارزشمند از مراقبت را  برای سایر شکل های درمانی ارائه می‌کنند.'},
        {id:6,bodyservicesimage: image6_body_services , bodyservicestitle:'خدمات اجتماعی' , bodyservicestext:'در آفرینش ما با والدین، اعضای خانواده و مراقبین از نزدیک کار می کنیم و در صورت نیاز با خدمات خارجی از جمله پزشکان خانواده، پزشکان اطفال همکاری می کنی'}

    ] 

    return(
       <section className={styles.services}>
        <div className=" container mx-auto"> 
            <p className=" text-white text-5xl pt-10">خدمات ما</p>
            <h1 className=" text-white text-6xl font-iransB mt-10">آفرینش از اینجا شروع می شود</h1>
            <div className=" grid grid-cols-12 mt-9">
                {bodyservicesitems.map((item) =>(
                <div className=' col-span-12 md:col-span-6 lg:col-span-4 mb-10' key={item.id}><Homecardservices {...item} /></div>


                ))}
                



            </div>
        </div>
       </section>
    )
}