const express=require('express');
const app=express();
const port=8000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit',(req,res)=>{
    console.log("Post parameter are " + JSON.stringify(req.body));
    res.redirect('/')
})
app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})