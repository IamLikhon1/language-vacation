import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import ErrorPage from './componet/ErrorPage.jsx';
import Login from './pages/Home/Login/Login';
import Register from './pages/Regsiter/Register';
import AuthProvider from './providers/AuthProvider';
import Instructors from './pages/Instructors/Instructors';
import DashBoard from './Layout/DashBoard';
import Classes from './pages/Classes/Classes';
import StudentClass from './pages/DashBoard/StudentClass/StudentClass';
import StudentPayment from './pages/DashBoard/StudentClass/StudentPayment';
import PrivateRoute from './providers/PrivateRoute';
import ManageClass from './pages/DashBoard/Admin/ManageClass/ManageClass';
import ManageUser from './pages/DashBoard/Admin/ManageUser/ManageUser';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import InstructorAdd from './pages/DashBoard/instructor/InstructorAdd';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/instructors',
        element:<Instructors></Instructors>,
        loader:()=>fetch('https://b7a12-summer-camp-server-side-iam-likhon1.vercel.app/instructor')
      },
      {
        path:'/classes',
        element:<Classes></Classes>,
        loader:()=>fetch('https://b7a12-summer-camp-server-side-iam-likhon1.vercel.app/classes')
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'studentclass',
        element:<StudentClass></StudentClass>,
        loader:()=>fetch('https://b7a12-summer-camp-server-side-iam-likhon1.vercel.app/getAllClass')
        
      },
      {
        path:'payment',
        element:<StudentPayment></StudentPayment>
      },
      // admin
      {
        path:'manageclass',
        element:<ManageClass></ManageClass>
      },
      {
        path:'manageuser',
        element:<ManageUser></ManageUser>
      },
      // instructor
      {
        path:'addClass',
        element:<InstructorAdd></InstructorAdd>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
  
  </React.StrictMode>,
)
