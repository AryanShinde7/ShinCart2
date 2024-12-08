import express from "express"
import dotenv from "dotenv"
import { Mongodbconnect } from "./config/db.connect.js"
import routers from "./routers/product.route.js"
import cors from "cors"
import Signin from "./models/Signin.model.js"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors({
    origin:true,
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}))
app.use("/api/products" , routers)

app.post("/api/Signin" , async (req , res)=>{
    const {username , email , password} = req.body
    const User = req.body

    if(!username || !email || !password){
        res.status(404).json({error:"please provide all the data"})
    }
    else{
    try {
        const newUser = new Signin(User)
        await newUser.save()
        res.status(200).json({Success:"Signin successful"})

    } catch (error) {
            console.log(`error :${error}`)

    }
}
})

app.post("/api/Login", async(req , res )=>{
    try {
        const {email , password} = req.body
        const result = await Signin.findOne({email:email})
        if(!result) return res.json({
            type:false,
            errormessage:"Invalid Email or passsword"
        })
        if(result.password === password) return res.json({type:true,userdata:result});
        res.json({
            type:false,
            errormessage:"Wrong email or password"
        })
    } catch (error) {
        res.json({
            type:false,
            errormessage:error.message
        })
    }
})


app.listen(port , ()=>{
    Mongodbconnect()
    console.log(`server started at ${port}`)
})      