import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import signUpContainer from '../signUp/signUpContainer'

const signInForm = () => {
  return (
    <form className='login-form'>
      <input type="text" placeholder='Your login (email or phone number)'/>
      <input type="text" placeholder='Your password'/>
      <button className='btn-accent-orange login-btn sign-in-btn'>Sign In</button>
      <NavLink to="/sign-up" className='sign-up-link'>or Sign up</NavLink>
    </form>
  )
}

const signIn = ({registeredUsers}) => {

  return (
    <div className='wrapper'>
      <h1 className='logo'>English <span>Diary</span></h1>
      <div className="left-col">
        <p className="desc">Want to improve your English and make it as easy as possible? Keep your diary in English,
          make daily entries, save new words and phrases, as well as links to sources with which you learn English.
          All this is here - in your English <span>Diary</span>. Let's starting!
        </p>
        <Route path="/sign-in" component={signInForm}/>
        <Route path="/sign-up" component={signUpContainer}/>
      </div>
    </div>
  )
}

export default signIn