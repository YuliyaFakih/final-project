import React from 'react'
import Nav from './Nav'
import styles from './About.module.css'
import doctor from './../../assets/img/doctor.jpg'

export default ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className={styles.mainBlock}>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.blockCorona}>
                <h1>An Important Update Regarding the Coronavirus (COVID-19)</h1>
                <span>Modis</span> <span>Posted 18 March 2020</span>
                <img src={doctor} alt="#"/>
                <p>As we monitor the developing situation with coronavirus (COVID-19), our commitment to providing the highest level of service remains. We continue to monitor and follow the latest guidelines from the Centers for Disease Control (CDC) and World Health Organization (WHO) to help prevent the spread of COVID-19. All current associates and visitors (including applicants) are asked to read and follow their instructions. During this national emergency, we're committed to keeping you informed of any changes to our services. That being said: Nothing is more important than health and safety, and the need to protect those most vulnerable to the coronavirus. Know that we are taking the necessary steps to minimize health risks to our teammates, our clients and our communities by maintaining a remote work environment until further notice.</p>

            </div>
        </div>
    )
}