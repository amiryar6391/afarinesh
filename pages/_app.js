import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const noAppPage = ['/admin/login' , '/components/dashboard/loading.js']
  return(
    <>
    <Head>
    <meta name="keywords" content="مشاوره زوج و زوج درمانی،مشاوره پیش از ازدواج،توسعه فردی(مدیریت خشم ، تفکر نقاد ، حل مسعله و... )،بازی درمانی(بیش فعالی ، توجه و تمرکز ، اوتیسم ، تاخیر رشدی و ...)،درمان افسردگی ، اضطراب ، وسواس و سایر مشکلات روانشناختی،درمان اختلالات یادگیری(خواندن ، نوشتن ، ریاضی)،مشاوره کودک ، نوجوان و خانواده،مشاوره تحصیلی (تمام پایه ها) و انتخاب رشته (پایه نهم و دوازدهم)،روانکاوی،تست رغبت شغلی،تست هوش ، شخصیت ، وکسلر ، بینه،تست AV12 برای تشخیص بیش فعالی و آیتم های دقت و تمرکز" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>مرکز مشاوره عمومی آفرینش</title>
    </Head>
   {!noAppPage.includes(router.pathname) && <Navbar />}
    <Component {...pageProps} />
   {!noAppPage.includes(router.pathname) && <Footer />}
    
    </>

  
  ) ;
}
