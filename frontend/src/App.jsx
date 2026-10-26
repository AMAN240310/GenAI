import {RouterProvider} from "react-router-dom"
import {router} from "./app.rout.jsx"
// import { AuthProvider }  from "./features/auth/auth.context.js"
import { AuthProvider } from "./features/auth/auth.context.jsx"
const App = () => {
  return (
    <AuthProvider>
       <RouterProvider router = {router} />
    </AuthProvider>
   
    
  )
}

export default App
