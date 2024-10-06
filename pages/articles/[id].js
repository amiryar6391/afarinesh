import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ReadArticle() {

  
  const { id } = useRouter().query;
  const [article, setArticle] = useState({});

  const getArticle = async () => {
   if(id){
    const res = await fetch(`/api/articles/${id}`);
    const data = await res.json();
    setArticle(data);
   }
  };

  useEffect(() => {
    getArticle();
  }, [id]);

 
  

  return (
    <section>
      <div className="bg-[#88947C]">
        <h1 className=" text-white p-10 font-iransB text-center text-2xl">
          {article.title}
        </h1>
      </div>
      <div className=" container mx-auto mt-20">
        <div className=" text-center lg:float-right ml-5 ">
          {article?.image?.url?.data
          ?
          <Image src={`data:${article.image.contentType};base64,${Buffer.from(article.image.url.data).toString('base64')}`} width={400} height={400} alt="article" className=" inline-block" />
          :
          'no data available'
          
          }
          
        </div>
        <p className=" text-justify  leading-loose indent-8 text-gray-600">
          {article?.text
            ? <div className=" article" dangerouslySetInnerHTML={{ __html : article.text }}/>
            : 'No content available'}
        </p>
      </div>
    </section>
  );
}
