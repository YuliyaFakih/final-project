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
        <div>
        <div className={styles.footerWrapper}>
                <div className={styles.BorderTop}>
                    <svg width="100%" viewBox="0 0 1600 156" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                        <g><path id="wedge" d="m1600,66 l -421,-66 l  -1179,106 l 0, -106 l 1600,0z" stroke="" fill="#f4f4f4"></path></g>
                    </svg>
                </div>
                    <div className={styles.blockHelp}>
                        <div className={styles.blockText}>
                            <h4> Start a Conversation </h4>
                            <p>Our global experts are ready to help your business.</p>
                            <span> Get in touch with a local representative today.</span>
                            <a role="button" href="/client-services/contact/">Contact us</a>
                        </div>
                        <div className={styles.blockMap}>
                            <h4>We are Global Leaders</h4>
                            <img src={localOffices} alt="Modis Global Map"/>
                            <span>We operate around the world. Find your local office.</span>
                            <a href="/locations/usa">Find U.S. offices</a>
                        </div>
                    </div>
                    <div className={styles.blockBorderBottom}>
                        <svg width="1600" viewBox="0 0 1600 90" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg"><g><path id="wedge" d="m0,90 l 0, -3 l 1600,-87 l 0,90 l -1600,0z" stroke="" fill="#262626"></path></g></svg>
                    </div>
            </div>
            <div className={styles.links}>
                <div className={styles.sectionsLinks}>
                    <div>
                        <span>Our Expertise</span>
                        <ul>
                            <NavLink to='/'>Our Vision</NavLink>
                            <NavLink to='/client-services/what-we-do/'>Business Lines</NavLink>
                            <NavLink to='/client-services/technology-practices/'>Technology Practices</NavLink>
                            <NavLink to='/client-services/industries/'>Key Industries</NavLink>
                            <NavLink to='/client-services/global-delivery-centers/'>Global Delivery Centers</NavLink>
                        </ul>
                    </div>
                    <div>
                        <span>Job Seekers</span>
                        <ul>
                            <NavLink to='/job-seekers/'>Overview</NavLink>
                            <NavLink to='/job-seekers/search-jobs/'>Search Jobs</NavLink>
                            <NavLink to='/job-seekers/submit-resume/'>Submit Resume</NavLink>
                            <NavLink to='/about-modis/internal-careers/'>Internal Careers</NavLink>
                            <NavLink to='/job-seekers/modis-academy-program/'>Modis Academy Program</NavLink>
                        </ul>
                    </div>
                    <div>
                        <span>Resources</span>
                        <ul>
                            <NavLink to='/resources/employers/'>Employers</NavLink>
                            <NavLink to='/resources/job-seekers/'>Job Seekers</NavLink>
                            <NavLink to='/resources/salary-guide/'>Salary Guide</NavLink>
                            <NavLink to='/resources/white-papers/'>White Papers</NavLink>
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
                        <NavLink to='/about-modis/press-room/'>Press</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <a href='https://www.adomyinfo.com/_layouts/15/AP/login.aspx?b=modis'>My Info</a> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/terms/'>Terms of Use</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/privacy-policy/'>Privacy Policy</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/cookies-policy/'>Cookies Policy</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/candidates-security-phishing/'>Candidates’ Security and Phishing</NavLink> <span> &#124; </span>
                    </li>
                    <li>
                        <a href='https://www.adeccogroupna.com/eeo-statement-and-legal-notices/'>EEO Statement and Legal Notices</a> <span> &#124; </span>
                    </li>
                    <li>
                        <NavLink to='/sitemap/'>Sitemap</NavLink> 
                    </li>
                </ul>
            
            </div>
        </div>
    )
}

export default Footer