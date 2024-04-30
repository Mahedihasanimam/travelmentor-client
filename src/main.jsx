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
import UpdateTourist from './pages/UpdateTourist';
import CountryDetails from './pages/CountryDetails';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Errorpage></Errorpage>,
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://travelmentor-server.vercel.app/addtourists')
      },
      {
        path:'/addtourists',
        element:<PrivateRoute><AddTourist></AddTourist></PrivateRoute>
      },
      {
        path:'/alltourists',
        element:<AllTourists></AllTourists>,
        loader:()=>fetch('https://travelmentor-server.vercel.app/addtourists')
      },
      {
        path:'/mylist',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
    
      },
      {
        path:'/updatetourist/:id',
        element:<PrivateRoute><UpdateTourist></UpdateTourist></PrivateRoute>,
        loader:({params})=>fetch(`https://travelmentor-server.vercel.app/details/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://travelmentor-server.vercel.app/details/${params.id}`)
      },
      {
        path:'/countrys/:country',
        element:<PrivateRoute><CountryDetails></CountryDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://travelmentor-server.vercel.app/countrys/${params.country}`)
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
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
