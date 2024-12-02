import Head from "next/head"




export default function ShowServices({descService}){


    return(
        <>
            <Head>
                <title>{descService.title}</title>
                <meta name="keywords" content={descService.title} />
                
            </Head>
            <section>
                <div className=" bg-greenD">
                    <h1 className=" text-white text-center font-iransB p-10 text-3xl">{descService.title}</h1>
                </div>
                <div className=" container mx-auto mt-10">
                    <h3 className=" text-center text-xl text-[#88947C] mb-12 md:text-right">ما اینجا هستیم تا کمک کنیم</h3>
                    
                    <div className=" image article text-justify  leading-loose indent-8 text-gray-600" dangerouslySetInnerHTML={{__html : descService.text}}/>
                    
                </div>
            </section>
        </>
        
    )
}

export async function getStaticProps(context){
    const {id} = context.params
    const res=await fetch(`${process.env.NEXTAUTH_URL}/api/services/${id}`)
    const descService=await res.json()
    

    return{
        props:{descService}
    }
}
export async function getStaticPaths(){
    const res=await fetch(`${process.env.NEXTAUTH_URL}/api/services`)
    const services=await res.json()
    const paths = services.map((service)=>{
        
        return {params : {id:String(service._id)} }
    })
    return{
        paths,
        fallback:false
    }
}