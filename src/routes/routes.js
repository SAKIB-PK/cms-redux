import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Dashboard from '../layout/Dashboard'
import Main from '../layout/Main'
import Addcontent from '../pages/Dashboard/Addcontent'
import EditContent from '../pages/Dashboard/EditContent'
import RemoveContent from '../pages/Dashboard/RemoveContent'
import History from '../pages/History'
import Home from '../pages/Home'
import ReadPost from '../pages/ReadPost'

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
        },
        {
            path:"/posts/:postID",
            element:<ReadPost/>
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
        },
        {
            path:"/dashboard/edit/:postID",
            element:<EditContent/>
        }
    ]

  }

])
export default routes