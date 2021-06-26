/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Nav from './Nav'
import styles from './Expertise.module.css'
import { NavLink } from 'react-router-dom'

export default ({isLoggedIn, setIsLoggedIn}) => {
    const [submitState, setSubmitState] = React.useState(false)
    const submitCheck = (event) => {
        event.preventDefault()
        setSubmitState(true)
    }
    if(submitState === false) {
        return (
        <div>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.contactBlock}>
                <form>
                    <h1>Contact us</h1>
                    <input type="text" placeholder="Full name" required/>
                    <input type="text" placeholder="Email address" required/>
                    <input type="text" placeholder="Phone" required/>
                    <div className={styles.contactCheckBoxes}>
                        <input type="checkbox" required/>
                        <p>
                            By checking this box, I give my express written consent for Modis (including its vendors and affiliates) to contact me using texting tools and/or an automatic telephone dialing system.  I understand that I may withdraw my consent at any time.
                        </p>
                    </div>

                    <input type="text" placeholder="Title" required/>
                    <input type="text" placeholder="Company" required/>
                    <label for="location">Preferred location</label>
                    <select name="Preferred location" id="location" required>
                            <option></option>
                            <option>California - Modis Burbank</option>
                            <option>Florida - Modis Fort Lauderdale</option>
                            <option>Illinois - Modis Chicago</option>
                            <option>Kentucky - Modis Louisville</option>
                            <option>Michigan - Modis Detroit</option>
                            <option>Maryland - Modis Columbia</option>
                            <option>Michigan - Modis Detroit</option>
                            <option>Texas - Modis Dallas</option>
                        </select>
                    <textarea placeholder="Type your message"></textarea>

                    <div className={styles.contactCheckBoxes}>
                        <input type="checkbox" required/>
                        <p>I have read and agree with Modis, inc.'s <NavLink to="/terms/">Terms of Use</NavLink></p>
                    </div>
                    <p>I understand and acknowledge that, among other important disclosures, the General Privacy Policy sets forth that Modis, inc. may share my data with its sister companies that are part of its global organization focused on providing human resource services and solutions.</p>
                    <button onClick={(event)=> submitCheck(event)}>Submit</button>
                </form>
                <div className={styles.contacts}>
                    <div>
                        <h2>U.S. Corporate Headquarters</h2>
                        <span>10151 Deerwood Park Boulevard</span><br/>
                        <span>Building 200, Suite 400</span><br/>
                        <span>Jacksonville, Florida 32256</span><br/>
                        <span>Phone: 904.360.2000</span><br/>
                        <span>Fax: 904.360.2110</span><br/>
                        <span>info@modis.com</span><br/>
                    </div>
                    <div>
                        <h2>Canada Corporate Headquarters</h2>
                        <span>10 Bay Street, 7th Floor</span><br/>
                        <span>Toronto, Ontario</span><br/>
                        <span>M5J 2R8</span><br/>
                        <span>Phone: 416.367.2020</span><br/>
                        <span>Toll Free: 800.842.5907</span><br/>
                        <span>Fax: 416.366.2001</span><br/>
                        <span>toronto@modis.com</span><br/>
                    </div>
                </div>
            </div>
            
        </div>
        )
    } else if (submitState === true){
        return (
        <div>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.formSubmitted}>
                <h1>Thank you!</h1>
                <h3>Thank you for contacting us. We will be in touch with you shortly.</h3>
                <h3> Looking for opportunities? Check out our latest IT & Engineering jobs here.</h3>
                <h3>Read our latest white papers on IT insights, trends and more here.</h3>
            </div>
        </div>
        )
    }
    
}