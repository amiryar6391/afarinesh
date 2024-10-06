import Sidebar from "@/components/dashboard/side/sidebar";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



export default function manageServices(){

    const [ image , setImage ] = useState(null)
    const [ title , setTitle ] = useState('')
    const [ text , setText ] = useState(null)
    const [ services , setServices] = useState([])
    

    const getServices = async () =>{
        const res = await fetch('/api/services')
        const data = await res.json()
        setServices(data)
    }
   
    useEffect(()=>{
        getServices()
    },[])

    const handler = async (e) =>{
        e.preventDefault()
       if( image && title && text){
        const formdata = new FormData()
        formdata.append('image' , image)
        formdata.append('title' , title)
        formdata.append('text' , text)

       const res= await fetch('/api/services' , {
            method : 'POST',
            body : formdata
        })
        if(res.status === 201){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "خدمت جدید با موفقیت ثبت شد!",
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


    return(
        <section>
             <div className=" bg-[#88947C]">
                <h1 className=" text-3xl text-center p-8 text-white">خدمات</h1>
            </div>
            <div className=" container mx-auto grid grid-cols-12 mt-6 gap-4">
                <div className=" col-span-5 sm:col-span-3">
                    <Sidebar />
                 </div>
                <div className=" col-span-7 sm:col-span-9">
                    <div className=" border h-40"></div>
                    <div className=" mt-10">
                    <h1 className=" text-2xl font-iransB">اضافه کردن خدمات جدید : </h1>
                        <form onSubmit={handler} className=" mt-2 border p-5 rounded-lg shadow-md">
                            <input type="text" placeholder="عنوان خدمت را وارد کنید" onChange={ (e)=> setTitle(e.target.value)} className=" focus:outline-none mt-10  w-[50%]  pb-4 border-b-2" />
                            <div className=" mt-7">
                                <p className=" text-gray-500 font-iransB mb-2">متن توضیح خدمت را بارگذاری کنید : </p>
                                <input type="file" onChange={(e) => setText(e.target.files[0])} />
                            </div>
                            <div className=" mt-7">
                                <p className=" text-gray-500 font-iransB mb-2">عکس خدمت را بارگذاری کنید : </p>
                                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                            </div>
                            <button type="submit" className=" mt-8 border  bg-[#46533B] text-white px-5 py-1 rounded-2xl">اضافه</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

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