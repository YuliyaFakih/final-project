import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import Expertise from './components/Expertise/Expertise'
import Footer from './components/Footer/Footer'
import SignUpAsEmployer from './components/SignUp/SignUpAsEmployer'
import SignUpAsJobSeeker from './components/SignUp/SignUpAsJobSeeker'
import Login from './components/Login/Login'
import BusinessLines from './components/BusinessLines/BusinessLines'
import Account from './components/Account/Account'

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <div className="App">
        <Route path='/home'>
          <Expertise isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route> 
        <Route path='/sign-up-as-employer' component={SignUpAsEmployer} />
        <Route path='/sign-up-as-job-seeker' component={SignUpAsJobSeeker} />  
        <Route path='/client-services/what-we-do/' component={BusinessLines} />  
        <Route path='/log-in'>
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path='/account'>
            <Account isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Route>  
        <Footer />
    </div>
  );
}

export default App;
