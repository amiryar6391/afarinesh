const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const adminModel = require ('./models/admin.model')

const creatAdmin = async ()=>{

    mongoose.connect('mongodb://localhost:27017/afarinesh')
    .then(() => console.log('connect to bd'))

    const hashPassword = await bcrypt.hash('admin123' , 10)
    // console.log(hashPassword);
    

    await adminModel.create({
        username : 'admin',
        password : hashPassword
    })

}

creatAdmin()