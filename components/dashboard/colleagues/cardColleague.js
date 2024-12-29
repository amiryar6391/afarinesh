import Image from "next/image"



export default function Cardcolleague({_id, name , describe , image , onDelete}){


    const deleteHandler = async () => {
        
        const res = await fetch('/api/colleagues', {
            method: 'DELETE',
            body: JSON.stringify({_id}),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data=await res.json()
        if(res.status == 200){
            onDelete(_id)
        }


        
    }
    
    return(
        <div className=" flex space-x-reverse space-x-5">
                <div className=' relative w-32 h-48'>
                    <Image src={`data:${image.contentType};base64,${Buffer.from(image.url.data).toString('base64')}`} layout="fill"   alt="colleague"/>
                </div>
                <div className=" relative">
                        <h4 className=" mt-5 font-iransB text-2xl">نام:{name}</h4>
                         <h5 className=" mt-10 font-iransB" >شرح:{describe}</h5>
                     <button type="button" onClick={deleteHandler} className=' border border-black bg-[#46533B] text-white w-20 h-9 absolute bottom-0 rounded-2xl font-iransB'>حذف</button>

                </div>
            
        </div>

    )
}

