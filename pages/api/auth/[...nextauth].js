import adminModel from "@/models/admin.model";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
const connectToDb = require('../../../configs/db')


export default NextAuth({
    providers : [
        CredentialsProvider({
            name : 'credentials',
            credentials : {
                username : { label : 'username' , type : 'text'},
                password : { label : 'password' , type : 'password'}
            },
            async authorize(credentials){
                await connectToDb()

                const admin = await adminModel.findOne({username : 'admin'})

                if(admin){
                    const isValidPass = await admin.comparePassword(credentials.password)
                    if(isValidPass){
                        return admin
                    }
                }
                return null

            }


        })


    ],
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, 
        httpOnly:true,
        secure: process.env.NODE_ENV === 'production',
        path:'/admin'
      },
      jwt: {
        secret: 'amiryar',
      },
    pages :{
        signIn : '/admin/login'
    }

})