import {createBrowserRouter, Navigate} from "react-router-dom"
import Login  from "./features/auth/Pages/login"
import Register from "./features/auth/Pages/register"
import Home from "./features/auth/Pages/Home"
import Protected from './features/auth/components/protected'


export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/",
        element: <Protected> <h1>Home Page</h1>  </Protected>,
    }

])