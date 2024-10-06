import { isValidObjectId } from 'mongoose';

const connectToDb =require('../../../configs/db')
const colleagueModel = require('../../../models/colleague.model')
const multer = require('multer')
const getRawBoby = require('raw-body')


const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: { bodyParser: false },
};




export default async function handler( req , res){
    await connectToDb()

    if( req.method === 'GET'){
        try{
            const colleagues = await colleagueModel.find()
            res.status(200).json(colleagues)

        }catch(err){
            res.json(err)

        }

    }


    if( req.method === 'POST'){
        upload.single("image")(req, res, async (err) => {
            if (err) return res.status(500).json({ message: "Upload failed", err });
        

            const {name , describe} = req.body
            const {buffer , mimetype}= req.file

            try{
                const result = await colleagueModel.create(
                    {
                        name,
                        describe,
                        image :{url:buffer , contentType:mimetype}
                    }
                )
                res.status(201).json({message:'datas are saved in db' , result})

            }catch(err){
                res.status(422).json({message : err.massage})

            }

            

    })
}


    if( req.method === 'DELETE'){

        const rawBody = await getRawBoby(req)
        const body = JSON.parse(rawBody.toString())
        const {_id} = body

        if(isValidObjectId(_id)){
            const result = await colleagueModel.findByIdAndDelete(_id)
            if(result){
                res.status(200).json({message : 'the colleague was deleted from database successfully'})
            }else{
                res.status(404).json({message : 'the colleague not found'})
            }
            
        }else{
            res.status(406).json({message: 'id is not valid'})
        }
    }

    

}