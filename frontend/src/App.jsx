import {RouterProvider} from "react-router-dom"
import {router} from "./app.rout.jsx"
import { AuthProvider }  from "./features/auth/auth.context.js"

const App = () => {
  return (
    <AuthProvider>
       <RouterProvider router = {router} />
    </AuthProvider>
   
    
  )
}

export default App
