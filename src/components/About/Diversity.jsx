import React from 'react'
import styles from './About.module.css'
import Nav from './Nav'
import womenForum from '../../assets/img/womenForum.png'
import witi from '../../assets/img/witi.png'
import dress from '../../assets/img/dress.png'
import paradigm from '../../assets/img/paradigm.png'
import military from '../../assets/img/military.png'
import military2 from '../../assets/img/military2.png'
import veteranMission from '../../assets/img/veteranMission.png'
import hirepurpose from '../../assets/img/hirepurpose.png'
import microsoft from '../../assets/img/microsoft.png'

export default ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className={styles.mainBlock}>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div className={styles.blockDiversity}>
                <div className={styles.blockDiversityBorder}>
                    <svg width="100%" viewBox="0 0 1600 223" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path id="wedge" d="m0,40 l 391,132 l 870,-55 l 339, 106 l -1600,0 l 0,-183z" stroke="" fill="#FFFFFF"></path>
                        </g>
                    </svg>
                </div>
                 <div className={styles.blockDiversityText}>
                    <h1>Embracing Diversity & Inclusion in the Workplace for a Better Tomorrow</h1>
                    <h2> We believe in order to compete in the current hiring landscape, a diverse workforce isn’t a luxury – it’s a necessity</h2>
                 </div>
            </div>
            <div className={styles.block2Diversity}>
                <h2>Our Commitment</h2>
                <h3>We’re committed to closing diversity gaps and developing technology and engineering teams that are broadly representative of the American workforce.</h3>
                <p>And we believe closing that gap begins inside our organization. That’s why we’re offering more opportunities than ever for colleagues to get involved in impactful initiatives that can create diversity, foster innovation, and ultimately cultivate a better workforce for all of us.</p> <br/>
                <p>It’s no secret: diversity enhances performance and efficiency while also encouraging innovation1. Persistent diversity gaps in the fields of engineering and technology have garnered increased scrutiny in recent years, causing many companies to launch new initiatives to recruit, hire, and source more diverse talent pipelines. By partnering with Modis to secure your top talent, you can trust that we’ve incorporated the strategies necessary to serve as an extension of your organization’s diversity and inclusion initiatives.</p>
            </div>
            <div className={styles.block3Diversity}>
                <div className={styles.block3DiversityTopBorder}>
                    <svg width="100%" viewBox="0 0 1600 156" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                            <g><path id="wedge" d="m1600,66 l -421,-66 l  -1179,106 l 0, -106 l 1600,0z" stroke="" fill="white"></path></g>
                    </svg>
                </div>
                <div className={styles.block3DiversityText}>
                    <h3>Empowering Women in Technology & Engineering Careers</h3>
                    <p>We embrace our responsibility to ensure women in the technology and engineering industry are among your most trusted leaders and are treated fairly both inside and outside our organization. By committing to influential coalitions such as Paradigm for Parity®, and partnering with tech industry associations like Women in Technology International, we’re working to ensure women are given the tools, resources, connections and opportunities to close this gender gap.</p>
                </div>
                <div className={styles.block3DiversityBorderBottom}>
                    <svg width="100%" viewBox="0 0 1600 127" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="wedge" d="m0,40 l 1600,87 l -1600,0 l 0,-87z" stroke="" fill="#f4f4f4"></path>
                            </g>
                    </svg>
                </div>
            </div>
            <div className={styles.block4Container}>
                <div className={styles.block4Forums}>
                    <h3>The Modis Women’s Leadership Forum</h3>
                    <img src={womenForum}/>
                    <p>The Modis Women's Leadership Forum was established in 2018 to further Modis' commitment to the strategic retention and advancement of women and to provide a successful mix of women colleagues within Modis with the tools, resources, mentoring and networks needed to support them with professional development in the workplace. The Forum is open to all Modis employees, including men who are “allies".</p><br/>
                    <p>The Modis Women's Leadership Forum proudly hosts regular WebEx meetings featuring various keynote speakers covering topics relevant to success, career growth and personal development. All Modis Colleagues are invited and encouraged to attend and participate in the discussions.</p>
                </div>
                <div className={styles.block4Forums}>
                    <h3>Women in Technology International (WITI)</h3>
                    <img src={witi}/>
                    <p>To further our mission of the advancement of women in the field of technology & engineering, Modis has partnered with Women in Technology International (WITI). WITI’s mission is to empower women worldwide to achieve unimagined possibilities and transformations through technology, leadership and economic prosperity. Through WITI’s resources and influence, we’re helping to ensure women inside and outside of Modis organization contribute, influence and achieve.</p>
                </div>
                <div className={styles.block4Forums}>
                    <h3>Dress for Success</h3>
                    <img src={dress}/>
                    <p>The Adecco Group US Foundation has a national partnership with the Dress for Success® organization in the United States, and the Modis Women’s Forum members are excited to lead involvement initiatives throughout Modis branches. The mission of Dress for Success is “to empower women to achieve economic independence by providing a network of support, professional attire and the development tools to help women thrive in work and in life.” Modis colleague collaboration and teamwork is highly encouraged to leverage the passion and energy of all Adecco Group colleagues in supporting Dress for Success.</p>
                </div>
                <div className={styles.block4Forums}>
                    <h3>Paradigm for Parity®</h3>
                    <img src={paradigm}/>
                    <p>To help advance women and close the gender gap, The Adecco Group is one of 59 companies who have signed on to an action plan to achieve gender parity among corporate leadership. With this commitment, the Adecco Group has committed to an actionable roadmap to catalyze change and enable today’s business executives to secure the best leaders of tomorrow. The Paradigm for Parity® coalition is composed of CEOs, senior executives, founders, board members and business academics who are committed to achieving a new norm in corporate leadership: one in which women and men have equal power, status, and opportunity.</p>
                </div>
            </div>
            <div className={styles.block5Veterans}>
                <div className={styles.block5VeteransTopBorder}>
                        <svg width="100%" viewBox="0 0 1600 156" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                                <g><path id="wedge" d="m1600,66 l -421,-66 l  -1179,106 l 0, -106 l 1600,0z" stroke="" fill="#f4f4f4"></path></g>
                        </svg>
                </div>
                <div className={styles.block5VeteransText}>
                    <h3>Our dedication to Veterans and their families.</h3>
                    <p>We believe hiring military-experienced talent is not charity, but rather one of the best ways your organization can ensure they have a winning team. Through our Modis Military Alliance, we strive to ensure we are participating in the military-affiliated programs that enable us to connect with and hire the top military talent you need to propel your organization forward.</p>
                </div>
                <div className={styles.block5VeteransBorderBottom}>
                    <svg width="100%" viewBox="0 0 1600 127" preserveAspectRatio="xMinYMin slice" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path id="wedge" d="m0,40 l 1600,87 l -1600,0 l 0,-87z" stroke="" fill="#f4f4f4"></path>
                            </g>
                    </svg>
                </div>
            </div>
            <div className={styles.block6MilitaryRecognition}>
                <div className={styles.block4Forums}>
                    <h3>Military Friendly® Recognition</h3>
                    <img src={military}/>
                    <img src={military2}/>
                    <p>The Adecco Group has been recognized by the military community as a 2021 Military Friendly® organization in four categories: Military Friendly® Employer, Military Friendly® Supplier Diversity Program, Military Friendly® Spouse employer and Military Friendly® Brand.</p>
                </div>
                <div className={styles.block4Forums}>
                    <h3>The Veteran Jobs Mission</h3>
                    <img src={veteranMission}/>
                    <p>As a founding member of this coalition, we’re dedicated to supporting this partnership of over 230 private-sector companies committed to addressing the most pressing needs of veterans in finding and keeping jobs. We’re proud to continue our work with this group to ensure that America’s companies keep current and former servicemembers a key part of their long term talent strategy.</p>
                </div>
                <div className={styles.block4Forums}>
                    <h3>Hire Purpose</h3>
                    <img src={hirepurpose}/>
                    <p>Modis engaged Hirepurpose in 2019 to ensure we are reaching more Veteran candidates than ever for our clients. Hirepurpose serves over 50,000 transitioning service members and veterans to support over 100 Fortune 1000, small and medium sized businesses.</p>
                </div>
                <div className={styles.block4Forums}>
                    <h3>Microsoft Software and SA </h3>
                    <img src={microsoft}/>
                    <p>Microsoft Software and Systems Academy works with a diverse pool of veteran talent being trained in MSSA (Microsoft Software and Systems Academy) and the hundreds of companies benefiting from hiring these transitioning service members. With learning paths including Cybersecurity, Cloud App Dev, and Server & Cloud Admin, and a goal of 1000 graduates annually, MSSA works with companies of all sizes to help align our graduates with meaningful roles as they transition from the military. MSSA also partners with IT staffing firms to discuss MSSA, best hiring practices, and how MSSA can partner to ensure our participants and our partners continue to thrive.</p>
                </div>
            </div>
        </div>
    )
}