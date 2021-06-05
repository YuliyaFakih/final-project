import React from 'react'
import Nav from '../Expertise/Nav'
import styles from './Account.module.css'

const Account = ({isLoggedIn, setIsLoggedIn}) => {
    let employers = JSON.parse(localStorage.getItem('employers'))
    let jobSeekers = JSON.parse(localStorage.getItem('jobSeekers'))
    //let email = document.cookie.match('login')[1];
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      let email = getCookie('login');
    if(employers.find(user => email === user.userEmail)) {
        } else if (jobSeekers.find(user => email === user.userEmail) {
            return (
                <div>
                    <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                    <div className={styles.profile} onLoad={getCookie}>
                        <div className={styles.card}>
                            <div className={styles.cardText}> 
                                <h2> Your profile </h2>
                                <div>
                                    <span>Name: </span>
                                    <span>{user.userName}</span>
                                </div>
                                <div>
                                    <span> Surname: </span>
                                    <span>{user.userSurname}</span>
                                </div> 
                                <div>
                                    <span> Email: </span>
                                    <span>{user.userEmail}</span>
                                </div>
                                <div>
                                    <span> Phone number: </span>
                                    <span>{user.userPhone}</span>
                                </div>
                                <div>
                                    <span> Region: </span>
                                    <span>{user.userRegion}</span>
                                </div>
                                <div>
                                    <span> Your CVV: </span>
                                    <span>{user.userCVV}</span>
                                </div>
                            </div>         
                        </div>
                    </div>
                </div>
    )}     
     
    
}

export default Account 

//let user = employers.find(user => email === user.userEmail);