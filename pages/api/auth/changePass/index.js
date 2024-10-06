const connctToDb = require('../../../../configs/db')
const adminModel = require('../../../../models/admin.model')
const bcrypt = require('bcrypt')


export default async function handler(req , res){
    await connctToDb()

    if( req.method === 'PATCH'){

        const {currentPassword , newPassword } = req.body

        const admin = await adminModel.findOne({username : 'admin'})
        const isValid = await admin.comparePassword(currentPassword)
         if(isValid){
            try{
                const hashPass = await bcrypt.hash(newPassword , 10)
                const result = await adminModel.findOneAndUpdate({username : 'admin'} , {password : hashPass})
                res.status(201).json({message : 'password changed' , result})
                

            }catch(err){
                res.status(422).json({message : err.message})

            }
            
            

      
         }   
    }

}