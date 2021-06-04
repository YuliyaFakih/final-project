import React from 'react'
import {Route} from 'react-router-dom'
import './App.css';
import Expertise from './components/Expertise/Expertise'
import Footer from './components/Footer/Footer'
import SignUpAsEmployer from './components/SignUp/SignUpAsEmployer'
import SignUpAsJobSeeker from './components/SignUp/SignUpAsJobSeeker'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
        <Route path='/home' component={Expertise} />
        <Route path='/sign-up-as-employer' component={SignUpAsEmployer} />
        <Route path='/sign-up-as-job-seeker' component={SignUpAsJobSeeker} />  
        <Route path='/log-in' component={Login} />  
        <Footer />
    </div>
  );
}

export default App;
//<Route path='/' component={} />
