import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      Register
      <form action="">
            <div>
              <label htmlFor=""> Username </label>
              <input type="text" id='username' placeholder='username' />
            </div>  

            <div> 
              <label htmlFor=""> Email id </label>
              <input type="text " placeholder='email' />
            </div>

            <div>
              <label htmlFor="" > Password </label>
              <input type="text" placeholder='password' />
              <label htmlFor=""> confirms password </label>
              <input type="text" placeholder='confirm password' /> 
            </div>

      </form>
     <p> already have an account ? <Link  to={"/login"}>Login</Link>  </p>

    </div>
  )
}

export default Register
