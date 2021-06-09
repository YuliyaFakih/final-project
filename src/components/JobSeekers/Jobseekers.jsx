import React from 'react'
import Nav from './Nav'
import styles from './Jobseekers.module.css' 
import star from './../../assets/img/icon-star.svg'


export default ({isLoggedIn, setIsLoggedIn}) => {
    const jobOffersArray = JSON.parse(localStorage.getItem('jobOffers'))
    const favoriteJobs = []
    const AddToFavorites = (id) => {
        if (isLoggedIn) {
            if(!favoriteJobs.find(item => item.id === id)){
                favoriteJobs.push(jobOffersArray.find(item => item.id === id))
                console.log(favoriteJobs)
                localStorage.setItem('favoriteJobs', JSON.stringify(favoriteJobs))
                alert('Added to favorite list, you can view it in My account')
                document.querySelector('.star').style.background = '#ffb81cab';
            } else if (favoriteJobs.find(item => item.id === id)) {
                alert(`You've already added this offer to the favorite list`)
            }
            
        } else {
            alert('You should sign in to be able to add favorite offers to the list')
        }
        
    }

    return(
        <div>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.jobContainer}>
                <div className={styles.jobList}>
                    {jobOffersArray.map((item) => (
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
                            <img class="star" src={star} alt="star" onClick={() => AddToFavorites (item.id)}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}