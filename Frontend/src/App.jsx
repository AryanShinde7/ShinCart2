
import Navbar from './Components/Navbar'
import "./App.css"
import Homepage from './Components/Homepage'
import AddProduct from './Components/AddProduct'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import UpdateProduct from './Components/UpdateProduct'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/> <Homepage/></>
    },
    {
      path:"/addProduct",
      element: <><Navbar/> <AddProduct/></>
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
