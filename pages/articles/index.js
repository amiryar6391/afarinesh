import Image from "next/image";
import photo from '../../public/images/article/ketab.jpg'
import CardArticle from "@/components/body/articles/cardArticle";
import { useState } from "react";





export default function Articles(){
    const [articles , setArticles] = useState([])

    const getArticles = async () =>{
        const res = await fetch('/api/articles')
        const data = await res.json()
        setArticles(data)
    }

    useState(()=>{
        getArticles()
    },[])



    return(
        <section>
            <div className=' relative h-[350px] w-full aspect-w-16 aspect-h-9 '>
                <Image src={photo} fill alt='image articles' priority className="brightness-75 saturate-150 object-contain md:object-cover object-center " sizes='(max-width: 768px) 100vw,50vm' />
            </div>
            <div className=" container mx-auto md:mt-14 text-center">
                <h1 className=" text-5xl font-iransB text-[#46533B]">مقالات ما</h1>
                <p className="text-[#88947C] text-2xl font-iransB mt-9">کسب تجربیات مفید از اینجا شروع میشود</p>
                <p className="text-[#88947C] mt-3 ">تیم مجرب کارشناسان مرکز مشاوره آفرینش ، بهترین و کاربردی ترین مقالات در زمینه های روانشناسی و روانشناختی را برای شما فراهم آوردند تا تجربیات خود را برای تعالی شما ، </p>
                <p className="text-[#88947C]  ">در مسیر زندگی موفق به اشتراک بگذارن.</p>
                <div className=" grid grid-cols-12 gap-4 mt-16">
                    {
                        articles.map((article) =>(
                            <div className=" col-span-12 md:col-span-6 lg:col-span-4" key={article._id}>
                                <CardArticle {...article} />
                            </div>

                        ))
                    }

                </div>
            </div>

        </section>
    )
}