import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import iconGlobe from '../../assets/img/iconGlobe.svg'
import styles from './Expertise.module.css'
import classes from './style.css'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Modal from '@material-ui/core/Modal';
import close from '../../assets/img/close.png'
import Subscribe from './Subscribe'

const Nav = ({isLoggedIn, setIsLoggedIn}) => {
    const [open, setOpen] = React.useState(false);
    const showList = () => {
        document.querySelector('.selector').style.display = 'block'
    }

    const hideList = () => {
        document.querySelector('.selector').style.display = 'none'
    }

    const OpenMenu =() => {
        document.querySelector('.MenuItemList').style.display = 'block'
    }
    const hideMenu = () => {
        document.querySelector('.MenuItemList').style.display = 'none'
    }

    const logOut = () => {
        setIsLoggedIn(false)
        localStorage.setItem('favoriteJobs', JSON.stringify([]))
        localStorage.setItem('submitedOffers', JSON.stringify([]))
        return (<Subscribe />)
    }

    return (
        <div className={styles.container}>
            <div class="selector">
                <div class="showBlock">
                
                <div>
                   <div>Global</div>
                    <NavLink to='/global'> Global </NavLink> 
                </div>
                <div>
                    <div>Asia  Pacific</div>
                    <NavLink to='/australia'> Australia </NavLink>
                    <NavLink to='/singapore'> Singapore </NavLink>
                    <NavLink to='/japan'> Japan </NavLink>
                    <NavLink to='/thailand'> Thailand </NavLink>
                </div>
                <div>
                    <div>Europe</div>
                    <div class="europe">
                        <NavLink to='/belgium'> Belgium </NavLink>
                        <NavLink to='/bulgaria'> Bulgaria </NavLink>
                        <NavLink to='/france'> France </NavLink>
                        <NavLink to='/germany'> Germany </NavLink>
                        <NavLink to='/italy'> Italy </NavLink>
                        <NavLink to='/netherlands'> Netherlands </NavLink>
                        <NavLink to='/norway'> Norway </NavLink>
                        <NavLink to='/poland'> Poland </NavLink>
                        <NavLink to='/spain'> Spain </NavLink>
                        <NavLink to='/sweden'> Sweden </NavLink>
                        <NavLink to='/switzerland'> Switzerland </NavLink>
                        <NavLink to='/UK'> UK </NavLink>
                    </div>
                    
                </div>
                <div>
                    <div>The Americas</div>
                    <NavLink to='/USA'> USA </NavLink>
                    <NavLink to='/canada'> Canada </NavLink>
                </div>
                <div>
                    <div> Languages </div>
                    <div> English </div>
                </div>
                <div class="close" onClick={() => hideList()}> <img src={close} alt="#"/> </div>
                </div>
            </div>
            <div className={styles.block}>
                <img src={logo} alt="Modis"/>
                <div className={styles.blockList}>
                    <NavLink to='/home'>
                        Our expertise
                        <ul className={styles.sectionsList}>
                            <NavLink to='/home'> Our Vision </NavLink>
                            <NavLink to='/client-services/what-we-do/'> Business Lines </NavLink>
                            <NavLink to='/client-services/technology-practices/'> Technology Practices </NavLink>
                            <NavLink to='/client-services/industries/'> Key Industries </NavLink>
                        </ul>
                    </NavLink>
                    <NavLink to='/job-seekers'>
                        Job seekers
                    </NavLink>
                    <NavLink to='/employers'>
                        Employers
                    </NavLink>
                    <NavLink to='/about-modis'>
                        About Modis
                    </NavLink>
                    <NavLink to='/client-services/contact'>
                        Contact
                    </NavLink>
                    <NavLink to='/locations/usa'>
                        Locations
                    </NavLink>
                    {isLoggedIn ? 
                    <div className={styles.menuAccount}>
                        <NavLink to='/account' onClick={() => setIsLoggedIn(true)}> My account </NavLink> 
                        <NavLink to='/home' onClick={() => logOut()}> Log out </NavLink>
                    </div> :
                    <div className={styles.MenuBtn}>
                        <a className={styles.SignUpLink} onClick={() => setOpen(true)}> Sign up </a>
                        <NavLink to='/log-in'> Log in </NavLink>
                    </div>
                    }
                    <div className={styles.burgerMenu} onClick={() => OpenMenu()}>
                        <div className={styles.MenuImg}>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                    <div className={styles.globe} onClick={() => showList()} >
                        <img src={iconGlobe} alt="icon-globe" />
                        <div> USA </div>
                        <div> English </div>
                    </div>
                </div>
                
            </div>
            
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            > 
            <div className={styles.modal}>
                <NavLink className={styles.button} to='/sign-up-as-employer'> Sign up as an employer</NavLink>
                <NavLink className={styles.button} to='/sign-up-as-job-seeker'> Sign up as a job seeker</NavLink>
            </div>
        
            </Modal>
            <div class="MenuItemList">
                <div class="MenuList">
                        <div class="LinkList">
                            <NavLink to='/home' className={styles.link}> Our Expertise</NavLink>
                            <NavLink to='/client-services/what-we-do/' className={styles.link}>Business Lines</NavLink>
                            <NavLink to='/client-services/technology-practices/'> Technology Practices </NavLink>
                            <NavLink to='/client-services/industries/'> Key Industries </NavLink>
                            <NavLink to='/job-seekers'>Job seekers </NavLink>
                            <NavLink to='/search-jobs'> Search jobs </NavLink>
                            <NavLink to='/internal-careers'> Internal careers </NavLink>
                            <NavLink to='/modis-academy-program'> Modis Academy Program </NavLink>
                            <NavLink to='/employers'>Employers</NavLink>
                            <NavLink to='/submit-offer'> Submit job offer </NavLink>
                            <NavLink to='/salary-guide'> Salary Guide </NavLink>
                            <NavLink to='/about-modis'>About Modis</NavLink>
                            <NavLink to='/diversity-and-inclusion'> Diversity and Inclusion </NavLink>
                            <NavLink to='/leadership'> Leadership </NavLink>
                            <NavLink to='/client-services/contact'>Contact</NavLink>
                            <NavLink to='/locations/usa'>Locations</NavLink>
                        </div> 
                        <div class="close" onClick={() => hideMenu()}> <img src={close} alt="#"/> </div>
                    </div>   
            </div>
        </div>
    )
}

export default Nav
