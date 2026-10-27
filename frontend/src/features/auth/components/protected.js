//import React, { Children } from 'react'
import {useAuth} from "../hooks/useAuth"
import { Navigate } from 'react-router-dom'
import React from 'react'

const Protected = () => {
     const {loading,user} = useAuth()
   //  const navigate = useNavigate()
     if(loading){
        return (<main>
            <h1> Lading... </h1>
        </main>)
     }

     if(!user){
         //  navigate('/login')
         return <Navigate to ={ '/login'} />
     }
     return Children
}

export default Protected
