import Sidebar from "@/components/dashboard/side/sidebar";
import { useState } from "react";
import Swal from "sweetalert2";


export default function ChangePassword(){
    const [currentPassword, setCurrentPassword] = useState(""); 
    const [newPassword, setNewPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");

     const handler = async (e) =>{
        e.preventDefault()
        if(currentPassword && newPassword && confirmPassword){
            if(newPassword === confirmPassword){
                const res = await fetch ('/api/auth/changePass' , {
                    method : 'PATCH',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify({
                        currentPassword,
                        newPassword,
                    })

                })
                if(res.status == 201){
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "تغییر رمز عبور با موفقیت انجام شد!",
                        showConfirmButton: false,
                        timer: 3000
                }
                )}else{
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "تغییر رمز عبور با خطا روبرو شد!لطفا مجددا سعی کنید.",
                        confirmButtonColor:"#88947C"
                      });
                }

            }else{
                Swal.fire({
                    position: "top",
                    icon: "warning",
                    title: "رمز عبور جدید با تکرار آن مطابقت ندارد!",
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
        <>
        <div className=" bg-greenD">
            <h1 className=" text-3xl text-center p-8 text-white">تغییر رمز عبور</h1>
        </div>
        <div className=" container mx-auto grid grid-cols-12 mt-6 gap-4">
            <div className=" col-span-5 sm:col-span-3">
                <Sidebar />
            </div>
            <div className=" col-span-7 sm:col-span-9">
                <form onSubmit={handler} className=" mt-2 border p-5 rounded-lg shadow-md">
                    <div>
                        <input type="password" placeholder="*رمز عبور فعلی را وارد کنید" onChange={(e) => setCurrentPassword(e.target.value)} className="focus:outline-none mt-5  w-[50%]  pb-4 border-b-2"/>
                    </div>

                    <div>
                         <input type="password" placeholder="*رمز عبور جدید را وارد کنید" onChange={(e) => setNewPassword(e.target.value)} className="focus:outline-none mt-14  w-[50%]  pb-4 border-b-2"/>  
                    </div>

                    <div>
                        <input type="password" placeholder="*رمز عبور جدید را مجددا وارد کنید" onChange={(e) => setConfirmPassword(e.target.value)} className="focus:outline-none mt-8  w-[50%]  pb-4 border-b-2"/>  
                    </div>
                    <button type="submit" className=" mt-8 border  bg-[#46533B] text-white px-5 py-1 rounded-2xl">تغییر</button>
                </form>
            </div>
        </div>   
        </>
    )
}