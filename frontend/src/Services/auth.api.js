import axios from "axios"

axios.create({
    baseURL:"http://localhost:5000/api/auth",
    withCredentials:true
})

export async function register ({username,email,password}){ 

   try{
    const response = await axios.post('/register',{username , email , password},
    {
       // username,eamil,password
         //withCredentials:true

     }) 
     return response.data
   }catch(err){
     console.log(err);
   }

    
}

export async function login( {email,password} ){
    try{
        const response = await axios.post('/login', {email,password },
             {
                  // withCredentials:true;
                 email,passord
             },
          
         )   
            return response.data
    }catch(err){
        console.log(err);
    }
}
export async function Logout() {
       try{
        const response  = await axios.post('/logout',{
            wihtCredentials:true
        })
        return response.data
       }catch(err){
        console.log(err);
       }
}

export async function getMe(){
    try{
        const response = await axios.get('/me',{
            withCredentials:true
        })
        return response.data
    }catch(err){
        console.log(err);
    }
}
