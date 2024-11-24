import express from "express"
import dotenv from "dotenv"
import { Mongodbconnect } from "./config/db.connect.js"
import routers from "./routers/product.route.js"
import cors from "cors"

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


app.listen(port , ()=>{
    Mongodbconnect()
    console.log(`server started at ${port}`)
})      