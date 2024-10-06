const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true,
        default : 'admin',
        immutable : true
    },
    password : {
        type : String,
        required : true
    }
})
adminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare( password , this.password)
    
}

module.exports = mongoose.models.admin || mongoose.model('admin' , adminSchema)