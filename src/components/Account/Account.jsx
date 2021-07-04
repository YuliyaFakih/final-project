import React from 'react'
import Nav from '../Expertise/Nav'
import styles from './Account.module.css'
import star from './../../assets/img/icon-star.svg'


const Account = ({isLoggedIn, setIsLoggedIn}) => {
    
    let employers = JSON.parse(localStorage.getItem('employers')) || []
    let jobSeekers = JSON.parse(localStorage.getItem('jobSeekers')) || []
    //let email = document.cookie.match('login')[1];
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    let email = getCookie('login');
    let employer = employers.find(user => email === user.userEmail)
    let jobseeker = jobSeekers.find(user => email === user.userEmail)
    let favoriteJobs = JSON.parse(localStorage.getItem('favoriteJobs')) || []
    const [stateJobs, setStateJobs] = React.useState(favoriteJobs) 
    let submitedOffers = JSON.parse(localStorage.getItem('submitedOffers')) || []
    const [stateOffers, setStateOffers] = React.useState(submitedOffers) 

    const DeleteFromList = (id) => {
        //setAddedState(false)
        favoriteJobs = favoriteJobs.filter(item => item.id !== id);
        setStateJobs(favoriteJobs)
        //return favoriteJobs.filter(item => item.id !== id)
        localStorage.setItem('favoriteJobs', JSON.stringify(favoriteJobs))
    }
    const DeleteOffer = (id) => {
        submitedOffers = submitedOffers.filter(item => item.id !== id);
        setStateOffers(submitedOffers)
        localStorage.setItem('submitedOffers', JSON.stringify(submitedOffers))
    }
 
    if(employer && !jobseeker) {
        console.log(employer)
        jobSeekers = []
        return (
        <div className={styles.mainBlock}>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <div className={styles.profile} onLoad={getCookie}>
                    <div className={styles.card}>
                        <div className={styles.cardText}> 
                            <h2> Your profile </h2>
                            <div>
                                <span>Name: </span>
                                <span>{employer.userName}</span>
                            </div>
                            <div>
                                    <span> Surname: </span>
                                    <span>{employer.userSurname}</span>
                                </div> 
                                <div>
                                    <span> Email: </span>
                                    <span>{employer.userEmail}</span>
                                </div>
                                <div>
                                    <span> Phone number: </span>
                                    <span>{employer.userPhone}</span>
                                </div>
                                <div>
                                    <span> Region: </span>
                                    <span>{employer.userRegion}</span>
                                </div>
                                <div>
                                    <span> Your company name: </span>
                                    <span>{employer.userCompany}</span>
                                </div>
                                <div>
                                    <span> Your site link </span>
                                    <span>{employer.userLink}</span>
                                </div>
                            </div>         
                        </div>
                </div>
                <div className={styles.jobList}>
                    <h2> Number of favorite offers: {favoriteJobs && favoriteJobs.length || 0}</h2>
                    {favoriteJobs && favoriteJobs.map((item) => (
                        <div className={styles.jobDescription}>
                            <div>
                                <p> Category: {item.position}</p>
                                <h2> {item.title} </h2>
                            </div>
                            <div>
                                <p> <b> {item.salary} </b></p>
                                <p> {item.city}</p>
                                <p> {item.company}</p>
                            </div>
                            <p>{item.description}</p>
                            <img src={star} alt="star" onClick={() => DeleteFromList(item.id)} style={{backgroundColor: '#ffb81c'}}/>
                        </div>
                    ))}
                </div>
                <div className={styles.jobList}>
                <h2> Number of submitted offers: {submitedOffers && submitedOffers.length || 0}</h2>
                    {submitedOffers && submitedOffers.map((item) => (
                        <div className={styles.jobDescription}>
                            <div>
                                <p> Category: {item.position}</p>
                                <h2> {item.title} </h2>
                            </div>
                            <div>
                                <p> <b> {item.salary} </b></p>
                                <p> {item.city}</p>
                                <p> {item.company}</p>
                            </div>
                            <p>{item.description}</p>
                            <img src={star} alt="star" onClick={() => DeleteOffer(item.id)} style={{backgroundColor: '#ffb81c'}}/>
                        </div>
                    ))}
                </div>
                </div>
        )
        } else if (jobseeker && !employer) {
            employers = []
            return (
                <div>
                    <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                        <div className={styles.profile} onLoad={getCookie}>
                            <div className={styles.card}>
                                <div className={styles.cardText}> 
                                    <h2> Your profile </h2>
                                    <div>
                                        <span>Name: </span>
                                        <span>{jobseeker.userName}</span>
                                    </div>
                                    <div>
                                        <span> Surname: </span>
                                        <span>{jobseeker.userSurname}</span>
                                    </div> 
                                    <div>
                                        <span> Email: </span>
                                        <span>{jobseeker.userEmail}</span>
                                    </div>
                                    <div>
                                        <span> Phone number: </span>
                                        <span>{jobseeker.userPhone}</span>
                                    </div>
                                    <div>
                                        <span> Region: </span>
                                        <span>{jobseeker.userRegion}</span>
                                    </div>
                                    <div>
                                        <span> Your CV: </span>
                                        <span>{jobseeker.userCV}</span>
                                    </div>
                                </div>         
                            </div>
                        </div>
                        <div className={styles.jobList}>
                            <h2> Number of favorite offers: {favoriteJobs && favoriteJobs.length || 0}</h2>
                            {favoriteJobs && favoriteJobs.map((item) => (
                                <div className={styles.jobDescription}>
                                    <div>
                                        <p> Category: {item.position}</p>
                                        <h2> {item.title} </h2>
                                    </div>
                                    <div>
                                        <p> <b> {item.salary} </b></p>
                                        <p> {item.city}</p>
                                        <p> {item.company}</p>
                                    </div>
                                    <p>{item.description}</p>
                                    <img src={star} alt="star" onClick={() => DeleteFromList(item.id)} style={{backgroundColor: '#ffb81c'}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                
    )}     
     
    
}

export default Account 

