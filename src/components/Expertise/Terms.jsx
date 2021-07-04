/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Nav from './Nav'
import styles from './Expertise.module.css'

export default ({isLoggedIn, setIsLoggedIn}) => {
    return (
        <div className={styles.mainBlock}>
            <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div className={styles.terms}>
                <h1>Terms of Use</h1>
                <h4><b>Last Updated</b>: November 2019</h4>
                <p>These Terms of Use apply to www.modis.com/en-us (the “Website”) and all related websites, operated by Modis, Inc. 10151 Deerwood Park Boulevard, Building 200, Suite 400, Jacksonville, Florida 32256 (hereinafter referred to as “Company”, “we”, “our” or “us”), that link to these Terms of Use.  For clarity, these Terms of Use also apply to any content, features, or computer applications offered from time to time by the Company in connection with the Website or that otherwise reference these Terms of Use (collectively, the “Services”).</p>
                <p>Please read these Terms of Use carefully. Your access to and use of the Website is subject to these Terms of Use and all applicable laws and regulations. These Terms of Use are a legal agreement between you and us. By accessing, browsing, or otherwise using the Website, you agree to be bound by these Terms of Use. If you do not agree to these Terms OF USE, PLEASE REFRAIN FROM USING THE WEBSITE.</p>
                <p>The Website does not constitute or purport to constitute a source of advice nor does your use of the Website constitute or guarantee a job or employment relationship between you and us or otherwise.</p>
                <p>We reserve the right to withdraw or amend the content we provide on the Website without notice. From time to time, we may restrict access to some parts of the Website, or the entire Website.</p>
                <h2>THESE TERMS OF USE MAY CHANGE</h2>
                <p>We reserve the right to modify these Terms of Use in our sole discretion at any time and without prior notice to you. Any changes will become effective when we post the revised Terms of Use on our Website. Therefore, your use of this Website is subject to the current Terms of Use as of the date of your use of the Website. Please check these Terms of Use regularly to ensure you agree to them. If you object to any changes, you may discontinue use of our Website. The date on which these Terms of Use were last updated is shown in the “Last Updated” legend above.</p>
                <h2>PRIVACY POLICY</h2>
                <p>We respect your privacy and are committed to its protection. Our General Privacy Policy (available at www.modis.com/en-us/privacy-policy) constitutes a part of these Terms of Use and explains how we collect, use, and disclose information about you. By accessing or using the Website, you are also agreeing to our General Privacy Policy. </p>
                <h2>USE OF THE WEBSITE</h2>
                <p>You acknowledge and voluntarily and expressly accept that your use of the Website is made under your sole and exclusive responsibility and at your sole risk.</p>
                <p>You are responsible for making all arrangements necessary for you to have access to the Website. You also are responsible for ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use, and that they comply with them.</p>
                <h2>USER ACCOUNTS, SECURITY AND PASSWORDS</h2>
                <p>Many portions of the Website are available for public viewing and use.  However, some of the Services we offer are only available if you register through the creation of an account. When our Services require you to register with us or otherwise provide user information, you may be required to complete the registration process by providing us with complete and accurate information. You grant us and our affiliates the right to use, store, monitor, retrieve and transmit your account and user information in connection with the operations of the Website and performance of our Services. You can review our information collection and use policies with respect to the privacy of your information in our General Privacy Policy (available at www.modis.com/en-us/privacy-policy) and our Candidate Privacy Statement (available at www.modis.com/en-us/candidate-privacy/), which are incorporated in these Terms of Use by references for all purposes.</p>
                <p>If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any third party. You are solely responsible for maintaining the confidentiality of your personal and account information as well as for any and all activities that occur under your account and to maintain the completeness and accuracy of your user information, and any loss caused by your failure to do so is your responsibility. You must notify us immediately of any suspected or actual unauthorized use of your account or user information, and any and all other security breaches. </p>
                <p>We implement reasonable security measures to safeguard our Website. Nevertheless, you must be aware that existing security measures for computer systems on the internet are not entirely trustworthy and that, therefore, we cannot guarantee the non-existence of viruses or any other elements that may cause alterations to your computer systems (hardware and software) or to your data and files contained in your systems.</p>
            </div>
        </div>
    )
}