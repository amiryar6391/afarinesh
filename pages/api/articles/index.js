import { isValidObjectId } from 'mongoose'

const connectToDb = require('../../../configs/db')
const articleModel=require('../../../models/article.model')
const multer=require('multer')
const getRawBody =require('raw-body')
const mammoth=require('mammoth')

const upload=multer({storage : multer.memoryStorage()})


export const config = {
    api : {
        bodyParser : false
    }
}



export default async function handler(req,res){
   await connectToDb()

    if( req.method === 'GET' ){
        try{
            const articles = await articleModel.find()
            res.status(200).json(articles)

        }catch(err){
            res.json(err)

        }
    }


    if( req.method === 'POST' ){
        upload.fields([{name : 'text' , maxCount:1},{name : 'image' , maxCount:1}])(req , res , async (err) => {
            if(err) return res.status(500).json({message : 'Upload failed' , err})

                const imgbuffer = req.files['image'][0].buffer
                const imgmime = req.files['image'][0].mimetype

                const txtbuffer = req.files['text'][0].buffer
               

                const { title } = req.body

                try{
                    const convert = await mammoth.convertToHtml({ buffer : txtbuffer })
                    const html = convert.value

                    const result = await articleModel.create(
                        {
                            title,
                            image:{ url : imgbuffer , contentType : imgmime},
                            text:html

                        }
                    )
                    res.status(201).json({message : 'datas is save in db' , result})

                }catch(err){
                     res.status(422).json({message : err.message})
                }

                

        })
    }

    
    if( req.method === 'DELETE' ){
        
        const rawBody = await getRawBody(req)
        const body = JSON.parse(rawBody.toString())
        const {id} = body

        if( isValidObjectId(id) ){
           const result = await articleModel.findByIdAndDelete(id)
           if(result){
            res.status(200).json({message : 'article was deleted from database successfully' , result})
            
           }else{
            res.status(404).json({message : 'article not find'})
           }

        }else{
            res.status(406).json({message : 'id is not valid'})
        }
        
    }


}