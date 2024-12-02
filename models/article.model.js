const mongoose=require('mongoose')

const articleSchema= new mongoose.Schema({

     title:{
        type : String,
        required : true
     },

     keywords:{
      type : String,
      required : true
     },

     text:{
          type : String,
          required : true
     },

     image:{
        url : { type : Buffer },
        contentType : { type : String }
     }

})
module.exports = mongoose.models.article || mongoose.model( 'article' , articleSchema )