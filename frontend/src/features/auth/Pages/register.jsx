import { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from "react-router-dom";

const Register = () => {
   const navigat = useNavigate()
   const [username,setrUsername] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const {loading, handleregister} = useAuth()
   const handleSubmit = async (e) =>{
    e.priventDefault();
      
    await handleregister({username,email,password})
    navigat('/')
   }

   if(loading){
    return ( <main> <h1>Loadoing </h1> </main>)
   }

  return (
    <div>
      Register
      <form action="">
            <div>
              <label htmlFor=""> Username </label>
              <input onChange={ (e)=> {setrUsername(e.target.value)} } type="text" id='username' placeholder='username' />
            </div>  

            <div> 
              <label htmlFor=""> Email id </label>
              <input onChange={ (e)=> {setEmail(e.target.value)} }  type="text " placeholder='email' />
            </div>

            <div>
              <label htmlFor="" > Password </label>
              <input type="text" placeholder='password' />
              <label htmlFor=""> confirms password </label>
              <input onChange={ (e)=> {setPassword(e.target.value)} }  type="text" placeholder='confirm password'  /> 
            </div>

      </form>
     <p> already have an account ? <Link  to={"/login"}>Login</Link>  </p>

    </div>
  )
}

export default Register

