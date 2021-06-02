import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import iconGlobe from '../../assets/img/iconGlobe.svg'
import styles from './Nav.module.css'

import SignIn from '../SignIn/SignIn'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';

const Nav = () => {
    
    const [open, setOpen] = React.useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <img src={logo} alt="Modis"/>
                <div className={styles.blockList}>
                    <NavLink to='/'>
                        Our expertise
                        <ul className={styles.sectionsList}>
                            <NavLink to='/'> Our Vision </NavLink>
                            <NavLink to='/business-lines'> Business Lines </NavLink>
                            <NavLink to='/technologe-practices'> Technology Practices </NavLink>
                            <NavLink to='/key-industries'> Key Industries </NavLink>
                            <NavLink to='/global-delivery-centers'> Global Delivery Centers </NavLink>
                        </ul>
                    </NavLink>
                    <NavLink to='/job-seekers'>
                        Job seekers
                        <ul className={styles.sectionsList}>
                            <NavLink to='/'> Overview</NavLink>
                            <NavLink to='/search-jobs'> Search jobs </NavLink>
                            <NavLink to='/submit-resume'> Submit resume </NavLink>
                            <NavLink to='/internal-careers'> Internal careers </NavLink>
                            <NavLink to='/modis-academy-program'> Modis Academy Program </NavLink>
                        </ul>
                    </NavLink>
                    <NavLink to='/resources'>
                        Resources
                        <ul className={styles.sectionsList}>
                            <NavLink to='/employers'> Employers</NavLink>
                            <NavLink to='/job-seekers'> Job Seekers </NavLink>
                            <NavLink to='/salary-guide'> Salary Guide </NavLink>
                            <NavLink to='/white-papers'> White Papers </NavLink>
                        </ul>
                    </NavLink>
                    <NavLink to='/about-modis'>
                        About Modis
                        <ul className={styles.sectionsList}>
                            <NavLink to='/'> Overview</NavLink>
                            <NavLink to='/press-room'> Press Room </NavLink>
                            <NavLink to='/diversity-and-inclusion'> Diversity and Inclusion </NavLink>
                            <NavLink to='/internal-careers'> Internal Careers </NavLink>
                            <NavLink to='/partnerships'> Partnerships </NavLink>
                            <NavLink to='/leadership'> Leadership </NavLink>
                        </ul>
                    </NavLink>
                    <NavLink to='/client-services/contact'>
                        Contact
                    </NavLink>
                    <NavLink to='/locations/usa'>
                        Locations
                    </NavLink>
                    <NavLink to='/' onClick={() => setOpen(true)}>
                        Sign in
                    </NavLink>
                    <NavLink to='/login'>
                        Log in
                    </NavLink>
                    
                    <div className={styles.globe} >
                        <img src={iconGlobe} alt="icon-globe" />
                        <div> USA </div>
                        <div> English </div>
                    </div>
                </div>
                
                
            </div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Modis
                </Link>
                <Link color="inherit" href="/getting-started/installation/">
                    Core
                </Link>
                <Link
                    color="textPrimary"
                    href="/components/breadcrumbs/"
                    aria-current="page"
                >
                    Breadcrumb
                </Link>
            </Breadcrumbs>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            > 
            <div className={styles.modal}>
                <button> Sign in as an employer</button>
                <button> Sign in as a job seeker</button>
            </div>
        
            </Modal>
            
        </div>
    )
}



export default Nav