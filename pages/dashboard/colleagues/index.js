
import Cardcolleague from "@/components/dashboard/colleagues/cardColleague";
import Sidebar from "@/components/dashboard/side/sidebar";
import { getSession } from "next-auth/react";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function Colleagues(){

    const[ name , setName] = useState('')
    const[ describe , setDescribe] = useState('')
    const[ file , setFile] = useState(null)
    const[colleagues , setColleagues]=useState([])
    

    const getColleagues = async () =>{
        const res=await fetch('/api/colleagues')
        const data=await res.json()
        setColleagues(data)

    }
   

    useEffect(()=>{
        getColleagues()
       
    },[])



    const resetForm = () =>{
        setName('')
        setDescribe('')
    }


    const handler = async(e) =>{
        if( name && describe && file){
            e.preventDefault()
            const formdata = new FormData()
            formdata.append('image' , file)
            formdata.append('name' , name)
            formdata.append('describe' , describe)
        

        const res = await fetch('/api/colleagues' , {
            method : 'POST',
            body : formdata
        })
        const data = await res.json()
        if(res.status == 201){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "همکار جدید با موفقیت ثبت شد!",
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

        resetForm()
    }

    const handelDeleteColleague = (id) => {
        setColleagues(colleagues.filter((info) => info._id != id))

    }

    return(
        <>
        <div className=" bg-greenD">
            <h1 className=" text-3xl text-center p-8 text-white">همکاران</h1>
        </div>
        <div className=" container mx-auto grid grid-cols-12 mt-6 gap-3 ">
            <div className=" col-span-5 sm:col-span-3">
                <Sidebar />
            </div>
            <div className=" col-span-7 sm:col-span-9">
                {
                    colleagues.length > 0 ? (
                    <div className=" grid grid-cols-12 gap-2">
                        {
                        colleagues.map((colleague) =>(
                        <div className=" col-span-12 mb-7" key={colleague._id}>
                            <Cardcolleague {...colleague} onDelete={handelDeleteColleague} />
                        </div>
                            
                        ))}       
                     </div>
                    )
                :
                <h1 className=" text-3xl font-iransB mt-5 text-center">در حال بارگذاری...</h1>

                }
                <div className=" mt-16 ">
                    <p className=" text-2xl font-iransB">اضافه کردن همکار جدید:</p>
                    <form onSubmit={handler} className=" mt-2 border p-3 rounded-lg shadow-md">
                        <div>
                        <input type="text" placeholder="نام و نام خانوادگی" value={name} onChange={ (e) => setName(e.target.value)}  className=" focus:outline-none mt-5  w-[50%]  pb-4 border-b-2 " />
                        </div>
                        <div>
                        <input type="text" placeholder="عنوان شغلی" value={describe} onChange={ (e) => setDescribe(e.target.value)} className=" focus:outline-none  w-[100%] mt-7  pb-4 border-b-2 " />
                        </div>
                        <div>
                        <input type="file"  onChange={ (e)=> setFile(e.target.files[0])}  className=" mt-8" />
                        <p className=" mt-3 text-gray-500">ابعاد عکس باید 1180*787 باشد با فرمت jpg و حجم حداکثر 500k</p>
                        </div>
                        <div className=" flex flex-row-reverse mt-8">
                        <button type="submit" className=" font-iransB bg-[#46533B] text-white  border border-black py-1 px-5 rounded-2xl ">اضافه</button>
                        </div>
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
