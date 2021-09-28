import styles from '../SignUp/SignUp.module.css'
import React from 'react'
import Nav from '../Expertise/Nav'
import { NavLink } from 'react-router-dom'


const Login = ({isLoggedIn, setIsLoggedIn}) => {
    function hashChange () {
        window.location.assign('/#/home')
    }

    const dataCheck = (event) => {
        event.preventDefault()
        let employers = JSON.parse(localStorage.getItem('employers'))
        let jobSeekers = JSON.parse(localStorage.getItem('jobSeekers'))
        console.log(employers, jobSeekers)
        let loginEmail = document.querySelectorAll('form input')[0].value;
        let loginPass = document.querySelectorAll('form input')[1].value;
        document.cookie = "login=" + loginEmail;
        if(employers && employers.find(user => loginEmail === user.userEmail && loginPass === user.userPassword ) || jobSeekers && jobSeekers.find(user => loginEmail === user.userEmail && loginPass === user.userPassword )){
            hashChange()
            setIsLoggedIn(true)
            
        } else {
            return alert(`Data incorrect, please verify it`)
        } 
    }
    return(
        <div className={styles.loginForm}>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <form>
                <h3>Sign in</h3>
                <label>Enter email address*</label>  
                <input type="email" placeholder="email" required/>
                <label>Enter password*</label> 
                <input type="password" placeholder="password" name="password" required/>
                <div className={styles.buttons2}>
                    <button type="submit" onClick={(event) => dataCheck(event)}> Sign in </button>
	                <button type="reset"> Reset </button>
                </div>
            </form>
        </div>
    )
}

export default Login

