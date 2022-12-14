import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Dashboard from '../layout/Dashboard'
import Main from '../layout/Main'
import Addcontent from '../pages/Dashboard/Addcontent'
import RemoveContent from '../pages/Dashboard/RemoveContent'
import History from '../pages/History'
import Home from '../pages/Home'

const routes =createBrowserRouter([{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:"/",
            element:<Home/>,
        },{
            path:"/history",
            element:<History/>
        }
    ]
  },{
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
        {
            path:"/dashboard/add",
            element:<Addcontent/>
        },
        {
            path:"/dashboard/remove",
            element:<RemoveContent/>
        }
    ]

  }

])
export default routes