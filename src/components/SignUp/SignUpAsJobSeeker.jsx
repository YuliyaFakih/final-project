import React from 'react'
import Nav from '../Expertise/Nav'
import styles from './SignUp.module.css'

export default () => {
    let jobSeekers = JSON.parse(localStorage.getItem('jobSeekers')) || []
    
    const formSubmit = (event) => {
        event.preventDefault()
        const userName = document.querySelectorAll('form input')[0].value;
        const userSurname = document.querySelectorAll('form input')[1].value;
        const userEmail = document.querySelectorAll('form input')[2].value;
        const userPhone = document.querySelectorAll('form input')[3].value;
        const userRegion = document.querySelectorAll('form input')[4].value;
        const userCVV = document.querySelectorAll('form input')[5].value;
        const userPassword = document.querySelectorAll('form input')[6].value;
        jobSeekers.push({userName, userSurname, userEmail, userPhone, userRegion, userCVV, userPassword})
        console.log(userName, userSurname, userEmail, userPhone, userRegion, userCVV, userPassword)
        let addJobSeeker = localStorage.setItem('jobSeekers', JSON.stringify(jobSeekers))
        return alert(`Account created with succes, please log in`)      
        
    }
    return (
        <div>
            <Nav />
            <div className={styles.fillForm}>
                <form>
                <h3>Create account</h3>
                    <label>Enter first name</label> 
                    <input type="text" placeholder="name" required/>
                    <label>Enter last name</label>  
                    <input type="text" placeholder="surname" required/>
                    <label>Enter email address</label>  
                    <input type="email" placeholder="email" required/>
                    <label>Enter phone number</label>  
                    <input type="tel" placeholder="phone number" required/>
                    <label>Enter region</label>
                    <input type="text" placeholder="region" required/>
                    <label> Add your CVV </label> 
                    <input type="text" placeholder="add CVV" />
                    <label>Enter password</label> 
                    <input type="password" placeholder="password" required/>
                    <input type="submit" value="Sign up" onClick={formSubmit} />
	                <input type="reset" value="Reset"/>
                </form>
            </div>
        </div>
    )
    
}
