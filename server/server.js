const express=require("express");
const app=express();
const router=require("./auth-router");
app.use(express.json());

app.use("/api",router);


const port=3000;
app.listen(port,()=>{
    console.log(`running in port ${port}`)
})