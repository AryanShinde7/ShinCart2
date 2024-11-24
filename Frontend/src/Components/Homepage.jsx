import React from 'react'
import { useState , useEffect} from 'react'
import axios from "axios"
import Card from './Card'


function Homepage() {

    const [count, setCount] = useState([])
    const [products, setProducts] = useState([])



    useEffect(() =>  {
        const getResponse = async ()=>{
          const response = await axios.get("http://localhost:5000/api/products",{
            withCredentials:true
          })
          console.log(response.data.products[1]._id)
          setProducts(response.data.products)
          setCount(response.data.products.length)
    
        }
        getResponse()
      }, [])

  return (
    <>
          <h1 style={{color:"white" , fontSize:"20px" , paddingLeft:"12px" , paddingTop:"10px"}}>{`Total products : ${count}`}</h1>
      <div className="container" style={{display:"flex" , width:"100vw" , justifyContent:"center"}}>
      <div className="products" style={{width:"fit-content" , blockSize: "fit-content"}}>
      {
        products.map((value)=>{
          return (
            <>
            <Card name={value.name} price={value.price} image={value.image} url={value._id} />
            </>
          )
        })
      }
      </div>
      </div>

      </>
  )
}

export default Homepage