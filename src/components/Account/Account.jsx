import React from 'react'
import Nav from '../Expertise/Nav'
import styles from './Account.module.css'

const Account = ({isLoggedIn, setIsLoggedIn}) => {
    let users = JSON.parse(localStorage.getItem('users'))
    //let email = document.cookie.match('login')[1];
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      let email = getCookie('login');
      let user = users.find(user => email === user.userEmail);
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
                            <span> Your company: </span>
                            <span>{user.userCompany}</span>
                        </div>
                        <div>
                            <span> Your site link: </span>
                            <span>{user.userLink}</span>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Account