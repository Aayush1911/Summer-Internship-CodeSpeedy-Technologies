const express=require('express')
const mongoose = require('mongoose')
const mongourl='mongodb://localhost:27017/employee'

const connectTOMongo=()=>{
    mongoose.connect(mongourl)
    console.log('Connected to mongodb Successfully');
}
connectTOMongo()
const userSchema=new mongoose.Schema({
    name:String,
    salary:Number
})

const User=mongoose.model('User',userSchema)
