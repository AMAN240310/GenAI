import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <main>
        <div className='flex justify-between'>
            <h1> form container</h1>
             <form onSubmit={handleSubmit}>
                 <div className='input-group'>
                     <label htmlFor="email">Email</label>
                     <input type="email" id= "email" name='email' placeholder='email' />
                 </div>
                  <div className='input-group'>
                     <label htmlFor="password">Password</label>
                     <input type="password" id='password' name='password' placeholder='passcode' />
                </div> 

                <div className='submitBtn bg-blend-color ' >
                     <button type="submit">
                        submit
                    </button>
                </div>



             </form>
             <p>Don&apos;t have an account? <Link to="/register">Register</Link></p>
             
        </div>

    </main>
  )
}

export default Login
