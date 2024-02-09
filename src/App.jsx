import { RouterProvider, createBrowserRouter, } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Elements from "./pages/Elements"
import GenericPage from "./pages/GenericPage"
import Error from "./components/Error"
function App() {

  const router = createBrowserRouter([
    {path:'',
    element:<Layout/>,
    children:[
      {index:true, element:<Home/>},
      {path:'/home', element:<Home/>},
      {path:'/elements', element:<Elements/>},
      {path:'/generic', element:<GenericPage/>},
      {path:'*', element:<Error/>}
    ]
  
  
  
  
  }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
