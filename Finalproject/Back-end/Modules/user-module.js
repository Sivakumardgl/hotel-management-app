const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:Number
})

const UserModel=mongoose.model('login',userSchema)

module.exports=UserModel