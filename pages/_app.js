import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const noAppPage = ['/admin/login' , '/components/dashboard/loading.js']
  return(
    <>
   {!noAppPage.includes(router.pathname) && <Navbar />}
    <Component {...pageProps} />
   {!noAppPage.includes(router.pathname) && <Footer />}
    
    </>

  
  ) ;
}
