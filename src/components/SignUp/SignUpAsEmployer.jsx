/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'
import Nav from '../Expertise/Nav'
import styles from './SignUp.module.css'

export default ({isLoggedIn, setIsLoggedIn}) => {

    let employers = JSON.parse(localStorage.getItem('employers')) || []
    
    const formSubmit = (event) => {
        event.preventDefault()
        const userName = document.querySelectorAll('form input')[0].value;
        const userSurname = document.querySelectorAll('form input')[1].value;
        const userEmail = document.querySelectorAll('form input')[2].value;
        const userPhone = document.querySelectorAll('form input')[3].value;
        const userCompany = document.querySelectorAll('form input')[4].value;
        const userRegion = document.querySelectorAll('form input')[5].value;
        const userLink = document.querySelectorAll('form input')[6].value;
        const userPassword = document.querySelectorAll('form input')[7].value;
        employers.push({userName, userSurname, userEmail, userPhone, userCompany, userRegion, userLink, userPassword})
        console.log(userName, userSurname, userEmail, userPhone, userCompany, userRegion, userLink, userPassword)
        localStorage.setItem('employers', JSON.stringify(employers))
        window.location.assign('/#/home')
        //setIsLoggedIn(true)
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
                    <label>Enter company name*</label>
                    <input type="text" placeholder="company name" required/>
                    <label>Enter region*</label>
                    <input type="text" placeholder="region" required/>
                    <label>Enter site link</label> 
                    <input type="url" placeholder="link to your site" />
                    <label>Enter password*</label> 
                    <input type="password" placeholder="password" required/>
                    <div className={styles.buttons}>
                        <button type="submit" onClick={(event) => formSubmit(event)}> Sign up </button>
	                    <button type="reset"> Reset </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
    
}


