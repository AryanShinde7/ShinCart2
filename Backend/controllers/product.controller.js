import Product from "../models/product.model.js"
import mongoose from "mongoose"


export const addProduct =  async (req , res) => {
    const product = req.body

    if( !product.name || !product.image || !product.price){
        return res.status(400).json({"message":"please provide all the fields"})
    }

    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(200).json({"message":"producted saved"})
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req , res)=>{

    const{id} = req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "invalid product id"})
  
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id , product , {new: true} )
         res.status(201).json({message: "product updates" , data:updatedProduct})
    } catch (error) {
        res.status(500).json({message: "server error"})

    }


}

export const deleteProduct =  async (req , res)=>{
    const {id} = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(201).json({message: "product deleted"})
    } catch (error) {
        res.status(500).json({message: "server error"})
    }

}

export const getAllProduct = async (req , res) =>{
    const products = await Product.find({})
    res.json({
        products:products
    })
}