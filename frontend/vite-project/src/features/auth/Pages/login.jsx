import React from 'react'

const login = () => {
  return (
    <main>
        <div className=' '>
            <h1> form container</h1>
             <form>
                 <div className='input-group'>
                     <label htmlFor="email">Email</label>
                     <input type="email" id= "email" name='email' placeholder='email' />
                 </div>
                  <div className='input-group'>
                     <label htmlFor="password">Password</label>
                     <input type="password" id='password' name='pasword' placeholder='passcode' />
                </div> 

             </form>

        </div>

    </main>
  )
}

export default login
