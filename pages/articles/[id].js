
import Image from "next/image";

export default function ReadArticle({article}) {


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
        
          {article?.text
            ? <div className=" text-justify  leading-loose indent-8 text-gray-600 article" dangerouslySetInnerHTML={{ __html : article.text }}/>
            : 'No content available'}
        
      </div>
    </section>
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
    fallback:false
  }
}
