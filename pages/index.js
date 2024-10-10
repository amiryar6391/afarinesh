import ChooseUs from "@/components/body/home/chooseus/chooseus";
import Hero from "@/components/body/home/hero/hero";
import Introduce from "@/components/body/home/introduce/introduce";
import Officevisit from "@/components/body/home/office-visit/officevisit";
import Homeservices from "@/components/body/home/services/homeservices";
import Team from "@/components/body/home/team/team";




export default function Home({teamInfo}) {
  
  return (
    <>
    <Hero />
    <Introduce/>
    <Homeservices />
    <Officevisit />
    <ChooseUs />
    <Team teamInfos={teamInfo} />
    
    
    </>
  );
}
export async function getStaticProps(){
        const res=await fetch(`${process.env.NEXTAUTH_URL}/api/colleagues`)
        const data=await res.json()
        

  return{
    props:{teamInfo:data}
  }
}