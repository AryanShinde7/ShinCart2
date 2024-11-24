import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>

    <nav id='navbar' className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand fs-2" id='logo' href="#">ShinCart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-relative" id="navbarNav">
        
        <Link type="button" to="/addProduct" className="btn btn-primary" style={{position:"absolute" , right:"10px"}}>Add Product</Link>     
  
    </div>
  </div>
</nav>
<div className="yellow-box"></div>
    </>
  )
}

export default Navbar