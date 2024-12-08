import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

function AddProduct({id}) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, SetImage] = useState("")


  return (
    <>
    <div className="container" style={{width:"50vw", marginTop:"10vh"}}>
    <form>
    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-light">Product Name</label>
      <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-light">Price</label>
      <input type="number" className="form-control" id="exampleInputPassword1"  onChange={(e)=>{setPrice(e.target.value)}}/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-light">Paste Image URL</label>
      <input type="text" className="form-control" id="exampleInputPassword1"  onChange={(e)=>{SetImage(e.target.value)}}/>
    </div>
  
    <button type="submit" className="btn btn-primary" onClick={()=>{
        axios.post("http://localhost:5000/api/products" , {name:name , price:price , image:image , owner_id:id} , {withCredentials:true})
        alert("Product added")
    }}>Add Product</button>
    <br />
    <br />
    <Link type="button" to="/" className="btn btn-dark fs-8 fw-medium" >⇐ Back to home page</Link> 
  </form>
    </div>
</>
  )
}

export default AddProduct