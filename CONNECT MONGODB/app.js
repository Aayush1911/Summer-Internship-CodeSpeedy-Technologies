const express=require('express')
const mongoose = require('mongoose')
const mongourl='mongodb://localhost:27017'

const connectTOMongo=()=>{
    mongoose.connect(mongourl)
    console.log('Connected to mongodb Successfully');
}

connectTOMongo()