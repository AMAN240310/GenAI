import {useContext} from 'react'
import {login , register , logout , getMe} from "../../../Services/auth.api"
import { AuthContext } from '../auth.context'

export const useAuth = () =>{
    const context = useContext(AuthContext)
    const {user, setUser, loading , setLoading} = context
    
    const handleLogin = async ({email,password}) =>{
        setLoading(true)
        try{

             await login({email,password})
        const data = await login({email,password})

        setUser(data.user)  
  } catch(err){
    console.log(err)
  }finally{
            setLoading(false)
  }


    }
    const handleRegister = async ({username, email,password}) =>{


        setLoading(true)
        try{
            const data = await register({username,email,password})
        setUser(data.user)        
        }catch(err){
            console.log(err);
        }finally{
          setLoading(false)    
        }

      

    }
    const handleLogout = async () =>{
        setLoading(true)
        try{

            const data = await logout()
            setUser(null) 
       }catch(err){
        console.log(err);
       }finally{
              setLoading(false)  
       }


    }
    
    return ({user,loading,handleLogin,handleRegister,handleLogout})
}

