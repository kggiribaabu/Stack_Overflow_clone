import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Auth.css'
import AboutAuth from './AboutAuth'
import { useDispatch } from 'react-redux'
import { signup, login } from '../../actions/auth'
import icon from '../../assets/icon.png'
const Auth = () => {
  let [isSignup, setIsSignup] = useState(false);
  let handleSwitch = () =>{
    setIsSignup(!isSignup)
  }
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email && !password) alert("enter a email and password")
    if(isSignup){
      if(!name){
        alert("enter a name to continue")
      }
      dispatch(signup({name, email, password}, navigate))
    }else{
      dispatch(login({email,password}, navigate))
    }
  }
  return (
    <section className='auth-section'>
        {
          isSignup && <AboutAuth />
        }
      <div className='auth-container-2'>
        { !isSignup && <img src={icon} alt='stack-overflow' className="login-logo" />}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='display-name'>
                <h4>Display Name</h4>
                <input type='text' name="name" id="display-name" onChange={(e) => {setName(e.target.value)}} />
              </label>
            )
          }
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email'  onChange={(e) => {setEmail(e.target.value)}}/>
          </label>
          <label htmlFor='password'>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <h4>Password</h4>
              {!isSignup && <h4 style={{color:"#007ac6", fontSize:"13px"}}>forgot password?</h4>}
            </div>
            <input type='password' name='password' id='password'  onChange={(e) => {setPassword(e.target.value)}}/>
            {
              isSignup && <p style={{color: "#666767",fontSize:"13px"}}>Passwords must contain at least eight<br /> characters, including at least 1 letter and 1<br /> number</p>
            }
          </label>
          {
            isSignup && (
              <lable htmlFor="check" className="check">
                <div>
                <input type='checkbox' id="check" />
                </div>
                <div>
                <p style={{fontSize:"13px"}}>opt-in to receive occasional,<br /> product updates, user research invitations,<br /> company announcements, and digests.<br /></p>
                </div>
              </lable>
            )
          }
          <button type='submit' className='auth-btn'>
            {isSignup ? 'Sign up': 'login'}
          </button>
          {
            isSignup && (
              <p style={{color: "#666767", fontSize:"13px"}}>By clicking "Sign up", you agree to our
                <span style={{color: "#007ac6"}}> terms of <br />services</span>,
                <span style={{color: "#007ac6"}}>privace policy</span> and 
                <span style={{color: "#007ac6"}}> cookie policy</span></p>
            )
          }
        </form>
        <p>
          { isSignup ? ' Already have an account? ':" Don't have an account? "}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'login':'signup'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth
