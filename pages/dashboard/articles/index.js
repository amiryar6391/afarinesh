import Sidebar from "@/components/dashboard/side/sidebar";
import { getSession } from "next-auth/react";
import Image from "next/image";

import { useEffect, useState} from "react";
import Swal from "sweetalert2";




export default function ArticleEdit(){

    const [imageFile , setImageFile] = useState(null)
    const [textFile , setTextFile] = useState(null)
    const [title , setTitle] = useState('')
    const [articles , setArticles] = useState([])
    

    const getArticles = async () =>{
        const res= await fetch('/api/articles')
        const data = await res.json()
        setArticles(data)
    }
  

    useEffect(()=>{
        getArticles()
        

    } , [])




    const handler = async(e)=>{
        e.preventDefault()
        if( imageFile && textFile && title){
           const formdata = new FormData()
           formdata.append('image' , imageFile)
           formdata.append('text' , textFile)
           formdata.append('title' , title)
           
           const res=await fetch('/api/articles' , {
               method : 'POST',
               body : formdata
           })
           if(res.status == 201){
               Swal.fire({
                   position: "top",
                   icon: "success",
                   title: "مقاله جدید با موفقیت ثبت شد!",
                   showConfirmButton: false,
                   timer: 3000
                 })
           }else{
               Swal.fire({
                   position: "top",
                   icon: "error",
                   title: "ثبت اطلاعات با خطا مواجه شد!لطفا مجدد سعی کنید",
                   confirmButtonColor:"#88947C"
                 });
           }
           
        }else{
           Swal.fire({
               position: "top",
               icon: "warning",
               title: "پر کردن همه فیلدها الزامی است!",
               confirmButtonColor:"#88947C"
             });
        }

      

   }

    const deleteHandler = async (id) => {
        
        const res=await fetch('/api/articles' , {
            method : 'DELETE',
            body : JSON.stringify({id}),
            headers :{
                'content-type' : 'application/json'
            }

        })
        if(res.status == 200){
            setArticles(articles.filter((article)=>article._id != id))
        }
    }



    return(
        <>
        <div className=" bg-greenD">
            <h1 className=" text-3xl text-center p-8 text-white">مقاله ها</h1>
        </div>
        <div className=" container mx-auto grid grid-cols-12 mt-6 gap-4">
            <div className=" col-span-5 sm:col-span-3">
                <Sidebar />
            </div>
            <div className=" col-span-7 sm:col-span-9">
                
                {
                    articles.map((article) => (
                        <div className=" border h-40 mb-4 flex gap-4" key={article._id}>
                  
                             <div className=" relative h-full w-1/6 ">
                                 <Image src={`data:${article.image.contentType};base64,${Buffer.from(article.image.url.data).toString('base64')}`} alt="articles" fill loading />
                            </div>
                             <div >
                                <p className=" mt-3"><span className=" font-iransB">عنوان مقاله : </span>{article.title}</p>
                                 <button onClick={() => deleteHandler(article._id)} className=" font-iransB  bg-[#46533B] text-white  border border-black py-1 px-10 rounded-2xl mt-20 ">حذف مقاله</button>
                            </div>     
                        </div>
                    ))
                }
               
                <div className="mt-10">
                        <h1 className=" text-2xl font-iransB">اضافه کردن مقاله جدید:</h1>
                        <form onSubmit={handler} className=" mt-2 border p-3 rounded-lg shadow-md">

                            <div>
                                 <input type="text" placeholder="عنوان مقاله" onChange={(e) => setTitle(e.target.value)} className=" focus:outline-none mt-5  w-[50%]  pb-4 border-b-2" />
                            </div>

                            <div className=" mt-8">
                                 <p className=" mb-2 text-gray-400 font-iransB">متن مقاله را بارگذاری کنید:</p>   
                                 <input type="file" onChange={(e) => setTextFile(e.target.files[0])}/>
                            </div>

                            <div className=" mt-8">
                                <p className=" mb-2 text-gray-400 font-iransB">عکس مورد نظر را بارگذاری کنید:</p>
                                <input type="file" onChange={(e) => setImageFile(e.target.files[0])}/>
                            </div>

                            <button type="submit" className=" mt-8 border  bg-[#46533B] text-white px-5 py-1 rounded-2xl">اضافه</button>

                        </form>
                </div>
            </div>

        </div>
       </>
    )
}

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return {
            redirect : {
                destination : '/admin/login',
                permanent : false
            }
        }
    }
    return {
        props : {}
    }
}