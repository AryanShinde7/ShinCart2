
import Navbar from './Components/Navbar'
import "./App.css"
import Homepage from './Components/Homepage'
import AddProduct from './Components/AddProduct'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import UpdateProduct from './Components/UpdateProduct'
import Login from './Components/Login'
import { useState } from 'react'

function App() {
  const [userId, setuserId] = useState("")

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/> <Homepage/></>
    },
    {
      path:"/Login",
      element: <><Navbar/> <Login setId={setuserId}/></>
    },
    {
      path:"/addProduct",
      element: <><Navbar/> <AddProduct id={userId} /></>
    },
    {
      path:"/updateProduct",
      element: <><Navbar/> <UpdateProduct/></>
    }

  ])  

  return (
    <>

    <RouterProvider router={router}/>

    </>
  )
}

export default App
