const connectToDb=require('../../../configs/db')
const servicesModel=require('../../../models/service.model')
const multer=require('multer')
const mammoth=require('mammoth')
const getRawBody =require('raw-body')

const upload = multer ({storage : multer.memoryStorage()})
 export const config = {
    api:{
        bodyParser : false
    }
 }

export default async function handler(req , res){
    await connectToDb()

    if( req.method == 'GET'){
        try{
            const services = await servicesModel.find()
            res.status(200).json(services)
            

        }catch(err){
            res.json(err)
            
        }
        
    }
    if( req.method == 'POST'){
        upload.fields( [{name : 'text' , maxCount:1} , {name : 'image' , maxCount:1}] )(req , res , async (err) => {
            if(err) return res.status(500).json({message : 'Upload failed' , err})

        const txtBuffer = req.files['text'][0].buffer

        const imgBuffer = req.files['image'][0].buffer
        const imgMime = req.files['image'][0].mimetype

        const {title} = req.body
                
                try{
                    const convert = await mammoth.convertToHtml({ buffer : txtBuffer})
                    const html = convert.value
                    const result = await servicesModel.create({
                        title,
                        text:html,
                        image:{
                            url : imgBuffer,
                            contentType : imgMime
                        }
                    })
                    res.status(201).json({massage : 'data is saved to db' , result})

                }catch(err){
                    res.status(422).json({message : err.massage})

                }         
        })
        
    }
    if( req.method == 'DELETE'){
        
    }
}