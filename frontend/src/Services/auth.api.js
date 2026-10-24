import axios from "axios"


export async function register ({username,email,password}){ 

   try{
    const response = await axios.post('',{username , email , password},
    { withCredentials:true

     }) 
   }catch(err){
     console.log(err);
   }

    
}

export async function login( {email,password} ){
    try{
        const response = await axios.post("", {email,password },
             {
                withCredentials:true;

             },
             return response 
         )   
    }catch(err){
        console.log(err);
    }
}
export async function Logout(token) {
       
}
