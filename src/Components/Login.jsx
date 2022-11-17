import React, { useEffect, useRef, useState } from 'react'
import '../App.css'

function Login() {
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')
  const [logStat, setLogStat] = useState('')

  const unameRef = useRef(null)
  const passRef = useRef(null)

  const handleChange = ()=>{
    setUname(unameRef.current.value)
    setPass(passRef.current.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(uname, pass);
    if(uname.trim() !== '' && pass.trim() !== ''){

    }
    clearInput()
  }

  const clearInput = ()=>{
    unameRef.current.value = ''
    passRef.current.value = ''
  }

  return (
    <div className="container">
      <div className='loginNav'>
        <h1>SanMart Shopping</h1>
      </div>
      <hr />
      <div className='container'>
        <div className='loginDiv'>
          <form>
            <div>
              <h2>Login</h2>
            </div>
            <div className="form-element">
              <label htmlFor="userName">Username:</label>
              <input type="text" name='userName' ref={unameRef} onChange={handleChange}/>
            </div>
            <div className="form-element">
              <label htmlFor="password">Password:</label>
              <input type="text" name='password' ref={passRef} onChange={handleChange}/>
            </div>
            <div className="formBtns">
              <button onClick={handleLogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login