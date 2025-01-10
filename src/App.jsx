

import Home from "../components/Home";
import Service from "../components/Service";
import { About } from "../components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "../components/Layout";

export const App=()=>{
  const elem=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
        path:"/",
        element:<Home/>
        
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/service",
        element:<Service/>
      },
      {
        path:"/menu",
        element:<menu/>
      }
      
    ]
    }
  ])

  return(
    <>
   <RouterProvider router={elem}/>
    </>
  )
}
export default App;