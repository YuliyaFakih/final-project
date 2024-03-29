import React from 'react'
import { NavLink } from 'react-router-dom'
import localOffices from '../../assets/img/localOffices.gif'
import styles from './Footer.module.css'
import logo from '../../assets/img/logo.svg'
import facebook from '../../assets/img/facebook.png'
import linkedin from '../../assets/img/linkedin.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'

const Footer = () => {
    return (
        <div className={styles.mainBlock}>
        <div className={styles.footerWrapper}>
                <div className={styles.BorderTop}>
                    <svg width="100%" viewBox="0 0 1600 156" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                        <g><path id="wedge" d="m1600,66 l -421,-66 l  -1179,106 l 0, -106 l 1600,0z" stroke="" fill="white"></path></g>
                    </svg>
                </div>
                    <div className={styles.blockHelp}>
                        <div className={styles.blockText}>
                            <h4> Start a Conversation </h4>
                            <p>Our global experts are ready to help your business.</p>
                            <span> Get in touch with a local representative today.</span>
                            <NavLink to="/client-services/contact">Contact us</NavLink>
                        </div>
                        <div className={styles.blockMap}>
                            <h4>We are Global Leaders</h4>
                            <img src={localOffices} alt="Modis Global Map"/>
                            <span>We operate around the world. Find your local office.</span>
                            <NavLink to='/locations/usa'>Find U.S. offices</NavLink>
                        </div>
                    </div>
                    <div className={styles.blockBorderBottom}>
                        <svg width="100%" viewBox="0 0 1600 90" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg"><g><path id="wedge" d="m0,90 l 0, -3 l 1600,-87 l 0,90 l -1600,0z" stroke="" fill="#262626"></path></g></svg>
                    </div>
            </div>
            <div className={styles.links}>
                <div className={styles.sectionsLinks}>
                    <div>
                        <span>Our Expertise</span>
                        <ul>
                            <NavLink to='/home'>Our Vision</NavLink>
                            <NavLink to='/client-services/what-we-do/'>Business Lines</NavLink>
                            <NavLink to='/client-services/technology-practices/'>Technology Practices</NavLink>
                            <NavLink to='/client-services/industries/'>Key Industries</NavLink>
                        </ul>
                    </div>
                    <div>
                        <span>Job Seekers</span>
                        <ul>
                            <NavLink to='/search-jobs/'>Search Jobs</NavLink>
                            <NavLink to='/internal-careers/'>Internal Careers</NavLink>
                            <NavLink to='/modis-academy-program/'>Modis Academy Program</NavLink>
                        </ul>
                    </div>
                    <div>
                        <span>Resources</span>
                        <ul>
                            <NavLink to='/employers/'>Employers</NavLink>
                            <NavLink to='/job-seekers/'>Job Seekers</NavLink>
                            <NavLink to='/salary-guide/'>Salary Guide</NavLink>
                        </ul>
                    </div>

                </div>
                <div className={styles.socialWebSites}>
                    <img src={logo} alt="logo"/>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/Modis"> <img src={facebook} alt="facebook" /> </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/modis"> <img src={linkedin} alt="linkedin" /> </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/modis"> <img src={twitter} alt="twitter" /> </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/modis"> <img src={youtube} alt="youtube" /> </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.separatingBorder}>
            
                <ul>
                    <li>
                        <NavLink to='/about-modis/'>About</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/about-modis/internal-careers/'>Internal Careers</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/locations/usa/'>Locations</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <a href='https://www.adomyinfo.com/_layouts/15/AP/login.aspx?b=modis'>My Info</a> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/terms/'>Terms of Use</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <a href='https://www.adeccogroupna.com/eeo-statement-and-legal-notices/'>EEO Statement and Legal Notices</a> 
                    </li>
                </ul>
            
            </div>
        </div>
    )
}

export default Footer