import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Mainlayout from './layout/Mainlayout';
import Home from './pages/Home';
import AddTourist from './pages/AddTourist';
import AllTourists from './pages/AllTourists';
import MyList from './pages/MyList';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addtourists',
        element:<AddTourist></AddTourist>
      },
      {
        path:'/alltourists',
        element:<AllTourists></AllTourists>
      },
      {
        path:'/mylist',
        element:<MyList></MyList>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
