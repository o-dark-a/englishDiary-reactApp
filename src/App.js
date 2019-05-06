import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.sass'
import signInContainer from './components/signIn/signInContainer'
import NewEntriesContainer from './components/Entries/NewEntriesContainer';

function App() {
  let loggedIn = true
  return (
      <div className="container">
        <Route exact path="/" render={() => (
          loggedIn ? (
            <Redirect to='/diary/new-entry'/>
          ) : (
            <Redirect to='/sign-in'/>
          )
        )}/>
        <Route path='/sign-in' component={signInContainer}/>
        <Route path='/sign-up' component={signInContainer}/>
        <Route path='/diary' component={NewEntriesContainer}/>
      </div>
  )
}

export default App;
