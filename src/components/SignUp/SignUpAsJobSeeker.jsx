/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Nav from '../Expertise/Nav'
import styles from './SignUp.module.css'

export default ({isLoggedIn, setIsLoggedIn}) => {
    let jobSeekers = JSON.parse(localStorage.getItem('jobSeekers')) || []
    
    const formSubmit = (event) => {
        event.preventDefault()
        const userName = document.querySelectorAll('form input')[0].value;
        const userSurname = document.querySelectorAll('form input')[1].value;
        const userEmail = document.querySelectorAll('form input')[2].value;
        const userPhone = document.querySelectorAll('form input')[3].value;
        const userRegion = document.querySelectorAll('form input')[4].value;
        const userCV = document.querySelectorAll('form input')[5].value;
        const userPassword = document.querySelectorAll('form input')[6].value;
        jobSeekers.push({userName, userSurname, userEmail, userPhone, userRegion, userCV, userPassword})
        console.log(userName, userSurname, userEmail, userPhone, userRegion, userCV, userPassword)
        let addJobSeeker = localStorage.setItem('jobSeekers', JSON.stringify(jobSeekers))
        window.location.assign('/#/home')
        return alert(`Account was created with success, you should sign in`)  
        
    }
    return (
        <div className={styles.mainBlock}>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.fillForm}>
                <form>
                <h3>Create account</h3>
                    <label>Enter first name*</label> 
                    <input type="text" placeholder="name" required/>
                    <label>Enter last name*</label>  
                    <input type="text" placeholder="surname" required/>
                    <label>Enter email address*</label>  
                    <input type="email" placeholder="email" required/>
                    <label>Enter phone number*</label>  
                    <input type="tel" placeholder="phone number" required/>
                    <label>Enter region*</label>
                    <input type="text" placeholder="region" required/>
                    <label> Add your CV* </label> 
                    <input type="file" placeholder="add CV" />
                    <label>Enter password*</label> 
                    <input type="password" placeholder="password" required/>
                    <div className={styles.buttons2}>
                        <button type="submit" onClick={(event) => formSubmit(event)}> Sign up </button>
	                    <button type="reset"> Reset </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}
