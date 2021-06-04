import styles from '../SignUp/SignUp.module.css'
import React from 'react'
import Nav from '../Expertise/Nav'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const dataCheck = (event) => {
        event.preventDefault()
        let users = JSON.parse(localStorage.getItem('users'))
        const loginEmail = document.querySelectorAll('form input')[0].value;
        if(users.filter(address => loginEmail === userEmail)){
            return `You've logged in`
        } else {
            return `Data incorrect, please verify it`
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