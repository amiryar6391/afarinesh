



export default function Teamcard({ name , describe , image}){
    
    return(
        <div className="">
                <div className="">
                    <img src={`data:${image.contentType};base64,${Buffer.from(image.url.data).toString('base64')}`}  alt="colleague" className=" w-full h-[450px]"/>
                    <div className='btn-card-team'>
                        <h4 className=" mt-5 font-iransB text-greenD text-2xl">{name}</h4>
                         <h5 className=" mt-3 text-[#46533B] font-iransB" >{describe}</h5>
                    </div> 
                </div>
            
        </div>

    )
}

