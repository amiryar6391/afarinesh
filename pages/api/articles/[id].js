const articleModel=require('../../../models/article.model')
const connectToDb=require('../../../configs/db')




export default async function handler(req , res) {
    await connectToDb()
    const {id} = req.query
    
    

    if(req.method === 'GET'){
        try{
            const result=await articleModel.findById(id)
            res.status(200).json(result)

        }catch(err){
            res.json(err)
        }
        
        
    }

    
}