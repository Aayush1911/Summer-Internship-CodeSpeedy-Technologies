const express=require('express');
const app=express()

app.use(express.json())

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})

app.get('/home/:id',(req,res)=>{
    let id=req.params;
    res.send(id)
})