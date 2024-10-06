import Image from "next/image";

 export default function CardChooseUs({chooseimg , choosetitle , choosedesc}){
    return(
        <div className=" p-5 space-y-9 group">
            <div className=" mb-3 text-center">
            <Image src={chooseimg} alt="image choose us" className=" inline-block transition-all duration-1000 group-hover:-translate-y-4"/>

            </div>
            
            
            <div className=" text-center space-y-7">
                <h3 className=" text-greenD text-2xl font-iransB">{choosetitle}</h3>
                <h6 className=" text-[#333333]">{choosedesc}</h6>

            </div>
        </div>
    )
 }