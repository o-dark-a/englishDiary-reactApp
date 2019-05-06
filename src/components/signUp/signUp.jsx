import React from 'react'
import { NavLink } from 'react-router-dom'

const signUp = (props) => {

  return (
    <form className='login-form'>
      <input type="text" placeholder='Enter your name'/>
      <input type="text" placeholder='Your login (email or phone number)'/>
      <input type="text" placeholder='Your password'/>
      <input type="text" placeholder='Please repeat the password'/>
      <button className='btn-accent-orange login-btn sign-in-btn'>Sign Up</button>
      <NavLink to="/sign-up" className='sign-up-link'>or Sign up with</NavLink>
    </form>
)
}

export default signUp