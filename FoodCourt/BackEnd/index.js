const express = require("express")
const app = express()
const multer = require('multer')
const port = process.env.PORT || 8000
const bodyparser = require("body-parser")
const foodsignup = require("./model/signupdb")
const image = require("./model/imagedb")
const payment_checkout = require("./model/paymentdb")

const upload = multer({
 storage: multer.diskStorage({
    destination:"uploads",
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
 })   
}).single("img")

require("./dbConnect/dbconnect")
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello sir")
})

app.post("/upload",upload,(req,res)=>{
    
})

app.post('/signup',async(req,res)=>{
    try{
        const data = new foodsignup(req.body)
        const result = await data.save()
        console.log(result);
        res.json({
            message:"signup successfully!!!"
        })
    }
    catch(error){
        if(error.keyValue){
            res.status(401).send({result:"Fail",message:"user email should be unique"})
        }
        else if(error.errors.name){
            res.status(401).send({result : "Fail",message:error.errors.name.message})
        }
        else if(error.errors.password){
            res.status(401).send({result : "Fail",message:error.errors.password.message})
        }
        else if(error.errors.email){
            res.status(401).send({result : "Fail",message:error.errors.email.message})
        }
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }

})
app.post('/payment',async(req,res)=>{
    try{
        const data = new payment_checkout(req.body)
        const result = await data.save()
        console.log(result);
        res.json({
            result:"Done",
            message:"payment successfully!!!"
        })
    }
    catch(error){
        if(error.keyValue){
            res.status(401).send({result:"Fail",message:"user email should be unique"})
        }
        else if(error.errors.card_name){
            res.status(401).send({result : "Fail",message:error.errors.name.message})
        }
        else if(error.errors.card_num){
            res.status(401).send({result : "Fail",message:error.errors.password.message})
        }
        else if(error.errors.card_type){
            res.status(401).send({result : "Fail",message:error.errors.email.message})
        }
        else if(error.errors.card_cvv){
            res.status(401).send({result : "Fail",message:error.errors.email.message})
        }
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }

})
app.post("/login",async(req,res)=>{
    if(req.body.email && req.body.password){

        const data = await foodsignup.findOne(req.body).select("-password")
        if(data){
            res.send(data)
        }else{
            res.send({message:"user not found"})
        }
    }
    else{
        res.send({result:"user not found"})
    }
})


app.listen(port,()=>console.log("server is connected"))