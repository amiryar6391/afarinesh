
import Head from "next/head";
import Image from "next/image";

export default function ReadArticle({article}) {
  const {image , title , text , keywords} = article
  
  
  
  


  return (
    <>
      <Head>
        <title> {title}</title>
        <meta name="keywords" content={keywords} />
      </Head>
      <section>
        <div className="bg-[#88947C]">
          <h1 className=" text-white p-10 font-iransB text-center text-2xl">
            {title}
          </h1>
        </div>
        <div className=" container mx-auto mt-20">
          <div className=" relative w-72 h-96  lg:float-right lg:w-96 ml-5 ">
            {image?.url?.data
            ?
            <Image src={`data:${image.contentType};base64,${Buffer.from(image.url.data).toString('base64')}`} fill  alt="article" />
            :
            'no data available'
            
            }
            
          </div>
          
            {text 
              ? <div className=" text-justify p-4  leading-loose indent-8 text-gray-600 article" dangerouslySetInnerHTML={{ __html :text }}/>
              : 'No content available'}
          
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context){
  const {id} = context.params
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/articles/${id}`)
  const article=await res.json()

  return{
    props:{
      article
    }
  }
}

export async function getStaticPaths(){
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/articles`)
  const articles=await res.json()
  const paths=articles.map((article)=>{
    return {params : {id:String(article._id)}}
  })
  return{
    paths,
    fallback: "blocking",
  }
}
