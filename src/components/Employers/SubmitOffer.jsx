/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Nav from './Nav'
import styles from './Employers.module.css'

export default ({isLoggedIn, setIsLoggedIn}) => {
    let jobOffers = JSON.parse(localStorage.getItem('jobOffers')) || []
    let submitedOffers = JSON.parse(localStorage.getItem('submitedOffers')) || []
    const [submitOffersState, setSubmitOffersState] = React.useState([])

    const formSubmit = (event) => {
        if(isLoggedIn) {
            event.preventDefault()
            let position = document.querySelectorAll('form input')[0].value;
            let title = document.querySelectorAll('form input')[1].value;
            let salary = document.querySelectorAll('form input')[2].value;
            let city = document.querySelectorAll('form input')[3].value;
            let company = document.querySelectorAll('form input')[4].value;
            let description = document.querySelectorAll('form input')[5].value;

setSubmitOffersState([...submitOffersState, {position, title, salary, city, company, description}])
localStorage.setItem('submitedOffers', JSON.stringify([...submitOffersState, {position, title, salary, city, company, description}]))
            jobOffers.push({position, title, salary, city, company, description})
            localStorage.setItem('jobOffers', JSON.stringify(jobOffers))
            //submitedOffers.push ({position, title, salary, city, company, description})
            //localStorage.setItem('submitedOffers', JSON.stringify(submitedOffers))
            alert('Your job offer was submitted. All your job offers are available in My account.')
            window.location.assign('/#/account')
        } else {
            event.preventDefault()
            alert('You should sign in before submit a job offer.')
        }
    }


    return (
        <div>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.formContainer}>
                <form>
                    <h3>To add your job offer on our site, please fill the form:</h3>
                    <label>Category*</label> 
                    <input type="text" placeholder="Category" required/>
                    <label>Position title*</label>  
                    <input type="text" placeholder="title" required/>
                    <label>Salary*</label>  
                    <input type="text" placeholder="salary" required/>
                    <label>City*</label>  
                    <input type="text" placeholder="City" required/>
                    <label>Company name*</label>
                    <input type="text" placeholder="company name" required/>
                    <label>Job description*</label> 
                    <input type="text" placeholder="description" required/>
                    <div className={styles.buttons2}>
                        <button type="submit" onClick={(event) => formSubmit(event)}> Submit </button>
	                    <button type="reset"> Reset </button>
                    </div>
                </form>
            </div>
        </div>
    )
}