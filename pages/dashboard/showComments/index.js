import CardComment from "@/components/dashboard/showcomments/cardComment";
import Sidebar from "@/components/dashboard/side/sidebar";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ShowComments() {

    const [ comments , setComments ] = useState([])
 

    const getcomments= async()=>{
        const res= await fetch('/api/comments')
        const data= await res.json()
        setComments(data)

    }
    const handleDeleteComment = (id) => {
      setComments(comments.filter((comment) => comment._id !== id));
    };
    

    useEffect(()=>{
        getcomments()
    },[])

  return (
    <>
      <div className=" bg-greenD">
        <h1 className=" text-3xl text-center p-8 text-white">پیام ها</h1>
      </div>
      <div className=" container mx-auto grid grid-cols-12 mt-6 gap-3 ">
        <div className=" col-span-5 sm:col-span-3">
          <Sidebar />
        </div>

        <div className=" col-span-7 sm:col-span-9">
          <div className=" grid grid-cols-12 gap-6">
            {
              comments.map((comment)=>(
                <div key={comment._id} className=" col-span-12">
                    <CardComment {...comment}   onDelete={handleDeleteComment} />
                </div>

              ))
            }
          </div>
        </div>
      </div>
    </>
  );
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
