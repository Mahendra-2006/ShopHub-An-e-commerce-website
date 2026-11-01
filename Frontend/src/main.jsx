import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Electronics from './Electronics.jsx'
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Personal_Details from './Personal_Details.jsx'
import Cart from './Cart.jsx'
import Register from './Register.jsx'

const router = createBrowserRouter([
  {
    path:"/dashboard",
    element:<App/>
  },
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/electronics",
    element:<Electronics/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/profile/personal-details",
    element:<Personal_Details/>
  },{
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/register",
    element:<Register/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
