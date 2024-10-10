import { isValidObjectId } from 'mongoose';

const connectToDb = require('../../../configs/db')
const servicesModel = require('../../../models/service.model')


export default async function handler( req , res) {
    await connectToDb()

   const {id} = req.query
   
    if( req.method === 'GET'){
        if(isValidObjectId(id)){
             try{
                const service = await servicesModel.findById(id)
                if (!service) {
                    return res.status(404).json({ message: 'Service not found' });
                }
                res.status(200).json(service)

            }catch(err){
                res.json(err)
            }

        }else{
            res.status(406).json({message : 'Id is not valid'})
        }
       
    }
    
}