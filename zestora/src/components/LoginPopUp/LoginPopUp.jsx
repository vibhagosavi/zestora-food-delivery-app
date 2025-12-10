import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {


const[currentState, setCurrentState] = useState("login")


  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currentState==="login"?<></>: <input type='text' placeholder='Your name' required/>}
                <input type='email' placeholder='Your email' required/>
                <input type='password' placeholder='Your password' required/>
            </div>
            <button>{currentState==="sign up"?"Create account":"login"}</button>
            <div className="login-popup-condition">
              <input type='checkbox' required/>
              <p>By continuing, I agree with the terms of use and privacy policy.</p>
            </div>
            {currentState==="login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
            
         
        </form>
    </div>
  )
}

export default LoginPopUp