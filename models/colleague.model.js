const mongoose=require('mongoose')
mongoose.Promise = global.Promise;


const colleagueSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    describe : {
        type : String,
        required : true
    },
    image : {
        url : { type : Buffer},
        contentType : { type : String}
    }
})

module.exports = mongoose.models.colleague || mongoose.model( 'colleague' , colleagueSchema )