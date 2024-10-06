import { isValidObjectId } from 'mongoose'

const connectToDb = require('../../../configs/db')
const commentModel = require('../../../models/comment.model')

export default async function handler( req , res){
    await connectToDb()

    if(req.method == 'GET'){
        try{
            const comments = await commentModel.find().sort({createdAt:-1})
            res.status(200).json(comments)

        }catch(err){
            res.json(err)


        }
    }

    if( req.method == 'POST' ){
        try{
            const result = await commentModel.create({...req.body})
            res.status(201).json({message : 'data save to db' , result})
        }catch(error){
            res.status(422).json({message : error.message})
        }
    }

    if( req.method == 'DELETE' ){

    const {_id} = req.body

    if(isValidObjectId(_id)){
        const result = await commentModel.findByIdAndDelete(_id)
        if(result){
            res.status(200).json({message : 'the message was deleted from database successfully'})
        }else{
            res.status(404).json({message : 'the message not found'})
        }
        
    }else{
        res.status(406).json({message: 'id not valid'})
    }

        
    }
}