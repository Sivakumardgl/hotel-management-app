const express=require('express')
const users=require('./routes/Signupuser')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())
mongoose.connect('mongodb://localhost:27017/logindetails')

mongoose.connection.on('connected',()=>{
    console.log("mongodb successfully connected")
})
app.get('/',(req,res)=>{
    res.send("Backend server")
})
app.use('/users',users)
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})