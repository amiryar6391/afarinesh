import Image from "next/image";




export default function Teamcard({ name , describe , image }){
    
    return(

        <div>
            <div className=" relative w-full h-[450px]">
                <Image src={`data:${image.contentType};base64,${Buffer.from(image.url.data).toString('base64')}`} fill loading="lazy" quality={75} alt="colleague"/>
            </div>
            <div className='btn-card-team'>
                <h4 className=" mt-5 font-iransB text-greenD text-2xl">{name}</h4>
                <h5 className=" mt-3 text-[#46533B] font-iransB" >{describe}</h5>
            </div> 
        </div>

    )
}

