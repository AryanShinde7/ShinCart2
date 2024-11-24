import React from 'react'
import {Link , useLocation, useNavigate} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

function UpdateProduct({}) {
  const location = useLocation();
  const navigate = useNavigate();
    const [name1, setName] = useState(location.state.name2)
    const [price1, setPrice] = useState(location.state.price2)
    const [image1, SetImage] = useState(location.state.image2)


  return (
    <>
    <div className="container" style={{width:"50vw", marginTop:"10vh"}}>
    <form>
    <h1 className="form-label text-light">Update Product</h1>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-light">Product Name</label>
      <input type="text"  className="form-control"  onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-light">Price</label>
      <input type="text" className="form-control"  onChange={(e)=>{setPrice(e.target.value)}}/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label text-light">Paste Image URL</label>
      <input type="text"className="form-control"  onChange={(e)=>{SetImage(e.target.value)}}/>
    </div>


  
    <button type="submit" className="btn btn-primary" onClick={()=>{
        axios.put(`http://localhost:5000/api/products/${location.state.url}` , {name:name1 , price:price1 , image:image1} , {withCredentials:true})
        navigate('/'); 
    }}>Add Product</button>
    <br />
    <br />
    <Link type="button" to="/" className="btn btn-dark" >Back to home page</Link>       

  </form>
    </div>

</>  )
}

export default UpdateProduct