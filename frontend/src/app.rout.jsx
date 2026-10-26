import {createBrowserRouter, Navigate} from "react-router-dom"
import Login  from "./features/auth/Pages/login"
import Register from "./features/auth/Pages/register"
import Home from "./features/auth/Pages/Home"



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
        element:<Home/>,
    }

])