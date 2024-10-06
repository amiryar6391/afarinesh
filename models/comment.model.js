const mongoose=require('mongoose')
mongoose.Promise = global.Promise;

const commentSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:10
    },
    family:{
        type:String,
        trim:true,
        minLength:4,
        maxLength:15
    },
    phone:{
        type:Number,

    },
    email:{
        type:String
    },
    message:{
        type:String,
        required:true,
        trim:true,
        minLength:4,
        maxLength:300
    },
},

{
    timestamps:true
}
    
    
    
    
)
module.exports=mongoose.models.comment || mongoose.model( 'comment' , commentSchema)
