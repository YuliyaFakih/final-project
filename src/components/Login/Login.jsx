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
        let users = JSON.parse(localStorage.getItem('users'))
        console.log(users)
        let loginEmail = document.querySelectorAll('form input')[0].value;
        let loginPass = document.querySelectorAll('form input')[1].value;
        document.cookie = "login=" + loginEmail;
        if(users.find(user => loginEmail === user.userEmail && loginPass === user.userPassword )){
            hashChange()
            setIsLoggedIn(true)
            return alert(`You've logged in`)
            
        } else {
            return alert(`Data incorrect, please verify it`)
        } 
    }
    return(
        <div className={styles.loginForm}>
            <Nav />
            <form>
                <h3>Sign in</h3>
                <label>Enter email address</label>  
                <input type="email" placeholder="email" required/>
                <label>Enter password</label> 
                <input type="password" placeholder="password" name="password"/>
                <input type="submit" value="Sign in" onClick={dataCheck} />
	            <input type="reset" value="Reset"/>
            </form>
        </div>
        
        
    )
}

export default Login

