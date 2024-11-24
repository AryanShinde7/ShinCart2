import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Card({name , price , image , url}) {

    const [state, setstate] = useState(0)

    const navigate = useNavigate()

    return (
        <>
            <div className="card d-inline-block mx-2 py-1 px-1 my-1" style={{width: "18rem", backgroundColor:"#1a1e21"}}>
                <img src={image} className="card-img-top" style={{height:"230px"}} alt="" />
                <div className="card-body">
                    <h5 className="card-title text-light">{name}</h5>
                    <p className="card-text text-light">₹ {price}</p>
                    <a  className="btn btn-primary mx-1 text-light">Buy</a>
                    <a  className="btn btn-primary mx-1 text-light" onClick={()=>{
                        alert("are you sure to delete the product")
                        axios.delete(`http://localhost:5000/api/products/${url}`,{withCredentials:true})
                        setstate(previousValue => previousValue + 1)
                    }}>Delete</a>
                    <a onClick={()=>{navigate('/UpdateProduct',{replace:true , state:{url , name2:name , image2:image , price2:price , state1:state}})}} className="btn btn-primary mx-1 text-light" >Update</a>

                </div>
            </div>
        </>
    )
}

export default Card