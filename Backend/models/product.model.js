import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    owner_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Siginins",
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timeStamps: true
})

const Product = mongoose.model("Product" , productSchema)

export default Product
