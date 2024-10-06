import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function ShowServices(){


    const {id} = useRouter().query


    const [descService , setDescService ] = useState({})

    const getDescServics = async () => {
        const res = await fetch(`/api/services/${id}`)
        const data = await res.json()
        setDescService(data)
    }
    useEffect(() =>{
        getDescServics()

    },[])

    return(
        <section>
            <div className=" bg-greenD">
                 <h1 className=" text-white text-center font-iransB p-10 text-3xl">{descService.title}</h1>
            </div>
            <div className=" container mx-auto mt-10">
                <h3 className=" text-center text-xl text-[#88947C] mb-12 md:text-right">ما اینجا هستیم تا کمک کنیم</h3>
                <p className=" text-justify  leading-loose indent-8 text-gray-600">
                    <div className=" image article" dangerouslySetInnerHTML={{__html : descService.text}}/>
                </p>

            </div>
        </section>
        
    )
}