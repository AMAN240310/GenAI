import {createBrowserRouter} from "react-router-dom"
import Login  from "./features/auth/Pages/login"
import register from "./features/auth/Pages/register"



export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<register/>
    }

])