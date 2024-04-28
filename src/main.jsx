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
import AuthProvider from './Authprovidfer/AuthProvider';
import  { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './Route/PrivateRoute';
import Errorpage from './pages/Errorpage';
import CardDetails from './pages/CardDetails';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Errorpage></Errorpage>,
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/addtourists')
      },
      {
        path:'/addtourists',
        element:<PrivateRoute><AddTourist></AddTourist></PrivateRoute>
      },
      {
        path:'/alltourists',
        element:<AllTourists></AllTourists>,
        loader:()=>fetch('http://localhost:5000/addtourists')
      },
      {
        path:'/mylist',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/addtourists/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
