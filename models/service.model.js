const mongoose=require('mongoose')

const serviceSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    image:{
        url : {type : Buffer},
        contentType : {type : String}
    }
})
module.exports = mongoose.models.service || mongoose.model('service' , serviceSchema)