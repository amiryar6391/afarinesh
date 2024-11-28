import Image from "next/image";
import photo from "../../public/images/contactus/yazd 5.webp";

import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactUs() {

  const [comment , setComment] = useState([])

  const commentHandler = (e) =>{
    setComment({...comment , [e.target.name] : e.target.value })
  }

  const resetForm = () =>{
    setComment({name:'',family:'',phone:'',email:'',message:''})
  }
  
  const btnCommentHandler = async () =>{
    if(comment.name && comment.message){
      const res= await fetch('/api/comments' , {
        method : 'POST',
        body : JSON.stringify({
          name:comment.name,
          family:comment.family,
          phone:comment.phone,
          email:comment.email,
          message:comment.message
        }),
        headers : {
          "content-type" : "application/json"
        }
      })
    const data=await res.json()
      if(res.status == 201){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "پیام شما با موفقیت ثبت شد.",
          showConfirmButton: false,
          timer: 3000
        })
      }else{
        Swal.fire({
          position: "top",
          icon: "error",
          title: "ثبت پیام شما با خطا مواجه شد!لطفا مجدد سعی کنید",
          confirmButtonColor:"#88947C"
          
        });
      }
      
    }else{
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "پر کردن فیلدهای ستاره دار الزامی است!",
        confirmButtonColor:"#88947C"
        
      });

    }
    resetForm()
    
    }
    
  
  return (
    <section>
      <div className=" relative h-[350px] w-full aspect-w-16 aspect-h-9">
        <Image
          src={photo}
          fill
          alt="image contact us"
          priority
          className=" brightness-75 object-contain md:object-cover object-center"
        />
      </div>
      <div className=" container mx-auto md:mt-28">
        <h1 className=" text-center font-iransB text-3xl text-[#46533B] md:text-right">
          با ما در تماس باشید
        </h1>
        <div className=" grid grid-cols-12 mt-12">
          <div className=" col-span-12">
            <p className=" text-center text-[#88947C] mb-10 md:text-right">
              نظرات،انتقادات و پیشنهادهای خود را با ما در میان بگذارید:
            </p>
            <form action="" className="">
              <div className=" mt-5 flex flex-col space-y-5 md:inline">
                <input
                  type="text"
                  placeholder="* نام"
                  name="name"
                  className=" focus:outline-none w-full  md:w-[48%] ml-3 border-b-2 pb-4 md:ml-7"
                  value={comment.name}
                  onChange={commentHandler}
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  name="family"
                  className="focus:outline-none w-full md:w-[48%] pb-4 border-b-2"
                  value={comment.family}
                  onChange={commentHandler}
                />
              </div>
              <div className=" mt-10 flex flex-col space-y-5 md:inline">
                <input
                type="tel"
                placeholder="شماره موبایل"
                name="phone"
                pattern="[0-9]*"
                maxLength='11'
                className=" text-right focus:outline-none w-full  md:w-[48%] ml-3 border-b-2 pb-4 md:ml-7"
                value={comment.phone}
                onChange={commentHandler}
                  
                />
                <input
                type="email"
                placeholder="ایمیل"
                name="email"
                className=" focus:outline-none w-full md:w-[48%] pb-4 border-b-2 "
                value={comment.email}
                onChange={commentHandler}
                  
                />
              </div>
              <div className=" mt-10">
                <textarea
                  placeholder="* پیام شما"
                  name="message"
                  className=" focus:outline-none w-full h-11 border-b-2"
                  value={comment.message}
                  onChange={commentHandler}
                ></textarea>
              </div>
              <div className=" text-center md:flex md:flex-row-reverse mt-12">
                <button type="button" className=" w-60 h-11 text-xl bg-greenD rounded-3xl text-white" onClick={btnCommentHandler}>
                  ثبت
                </button>
              </div>
            </form>
          </div>
          <div className=" col-span-12 mt-10">
            <div className=" flex items-start mr-20 mb-7">
              <span className="text-[#46533B]">
                <GrLocationPin size="30px" />
              </span>
              <p className=" flex items-center mt-2 text-[#46533B] font-iransB">
                یزد-خیابان
                کاشانی-خیابان چمران-جنب بانک ملت و بانک مسکن-بن بست صادقیه-مرکز
                مشاوره آفرینش
              </p>
            </div>
            <div className=" mr-20">
              <p className=" flex items-center text-[#46533B] font-iransB">
                <AiOutlinePhone size="50px" className=" pl-3" />
                09132275424
              </p>
            </div>
            <div className=" text-center mt-11">
              <p className=" text-[#88947C] font-iransB">ما را دنبال کنید</p>
              <hr className="w-1/2 mx-auto mt-3 mb-3" />
              <a href="https://www.instagram.com/afarinesh.clinic.yazd/?igsh=dGVwYjFpZGZxajU4" className=" inline-block ">
                <FaInstagram size="30px" className="text-[#46533B] pr-2" />
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.9350881718005!2d54.37716907932156!3d31.881181662339692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fa619067d35d865%3A0x6331f28780c8c4fb!2sYazd%20Province%2C%20Yazd%D8%8C%20Sadeqie%2C%20Iran!5e0!3m2!1sen!2sae!4v1726548384879!5m2!1sen!2sae"
            title="map"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
