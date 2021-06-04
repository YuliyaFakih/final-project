import React, {useState} from 'react'
import Nav from '../Expertise/Nav'
import styles from './SignUp.module.css'
import SignUpSucces from './SignUpSucces'

export default () => {

    const [values, setValues] = useState ({
        name:"",
        surname: "",
        email: "",
        phone:"",
        company:"",
        region:"",
        link:"",
        password:""
    })

    
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
        
    }

    
    let users = []
    

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
        users.push({userName, userSurname, userEmail, userPhone, userCompany, userRegion, userLink, userPassword})
        console.log(userName, userSurname, userEmail, userPhone, userCompany, userRegion, userLink, userPassword)
        let addUser = localStorage.setItem('users', JSON.stringify(users))
        return (
            <SignUpSucces />
        )
    }
    
    

    return (
        <div>
            <Nav />
            <div className={styles.fillForm}>
                <form>
                <h3>Create account</h3>
                    <label>Enter first name</label> 
                    <input type="text" placeholder="name" name="name" value={values.name} onChange={handleChange} required/>
                    <label>Enter last name</label>  
                    <input type="text" placeholder="surname" name="surname" value={values.surname} onChange={handleChange} required/>
                    <label>Enter email address</label>  
                    <input type="email" placeholder="email" name="email" value={values.email} onChange={handleChange} required/>
                    <label>Enter phone number</label>  
                    <input type="tel" placeholder="phone number" name="phone" value={values.phone} onChange={handleChange} required/>
                    <label>Enter company name</label>
                    <input type="text" placeholder="company name" name="company" value={values.company} onChange={handleChange} required/>
                    <label>Enter region</label>
                    <input type="text" placeholder="region" name="region" value={values.region} onChange={handleChange} required/>
                    <label>Enter site link</label> 
                    <input type="url" placeholder="link to your site" name="link" value={values.link} onChange={handleChange}/>
                    <label>Enter password</label> 
                    <input type="password" placeholder="password" name="password" value={values.password} onChange={handleChange}/>
                    <input type="submit" value="Sign up" onClick={formSubmit} />
	                <input type="reset" value="Reset"/>
                </form>
            </div>
        </div>
    )
    
}


