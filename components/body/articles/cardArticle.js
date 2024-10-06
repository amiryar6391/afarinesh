import Image from "next/image";
import Link from "next/link";




export default function CardArticle({_id , title , image}){
    return(
        <div className=" rounded-lg overflow-hidden shadow-xl ">
            <div className=" relative h-96">
                 <Image src={`data:${image.contentType};base64,${Buffer.from(image.url.data).toString('base64')}`} fill alt="article"  />
             </div>
            <div className=" flex justify-between p-2 mt-5 mb-2">
                <p className=" font-iransB text-gray-500"><span className=" font-iransB text-lg text-black">عنوان مقاله : </span>{title}</p>
                <Link href={`/articles/${_id}`}>
                     <button className="font-iransB  bg-[#46533B] text-white  border border-black py-1 px-6 rounded-2xl hover:text-[#46533B] hover:bg-white">مطالعه مقاله</button>
                </Link>
                
            </div>
         </div>
    )
}