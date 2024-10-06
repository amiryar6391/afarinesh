import ChooseUs from "@/components/body/home/chooseus/chooseus";
import Hero from "@/components/body/home/hero/hero";
import Introduce from "@/components/body/home/introduce/introduce";
import Officevisit from "@/components/body/home/office-visit/officevisit";
import Homeservices from "@/components/body/home/services/homeservices";
import Team from "@/components/body/home/team/team";
import Footer from "@/components/footer/footer";




export default function Home() {
  return (
    <>
    <Hero />
    <Introduce/>
    <Homeservices />
    <Officevisit />
    <ChooseUs />
    <Team />
    
    
    </>
  );
}
