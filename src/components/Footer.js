import React from "react"
import '../Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    
    return (
        <div className='footer'>
            <div  className="sb_footer-links">
                
                <a href="https://www.nifs.ac.lk/">
                    {/* <img className='socialimg' src='web.png'/> */}
                    <FontAwesomeIcon icon={faGlobe} className={'socialimg'}></FontAwesomeIcon>
                </a>
                
                <a href="https://www.facebook.com/nifslk/"> 
                    {/* <img className='socialimg' src='facebook.png'/> */}
                    <FontAwesomeIcon icon={faFacebook} className={'socialimg'}></FontAwesomeIcon>
                </a>
                
                <a href="https://lk.linkedin.com/company/nifslk">
                    {/* <img className='socialimg' src='linkedin.png'/> */}
                    <FontAwesomeIcon icon={faLinkedin} className={'socialimg'}></FontAwesomeIcon>
                </a>
                
                <a href="https://www.instagram.com/nifs_lk/?hl=en">
                    {/* <img className='socialimg' src='instagram.png'/> */}
                    <FontAwesomeIcon icon={faInstagram} className={'socialimg'}></FontAwesomeIcon>
                </a>
                
                <a href="https://twitter.com/nifslk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    {/* <img className='socialimg' src='twitter.png'/> */}
                    <FontAwesomeIcon icon={faTwitter} className={'socialimg'}></FontAwesomeIcon>
                </a>
                
                <a href="https://www.youtube.com/@IFSweba">
                    {/* <img className='socialimg' src='youtube.png'/> */}
                    <FontAwesomeIcon icon={faYoutube} className={'socialimg'}></FontAwesomeIcon>
                </a>
            </div>
            <div  className="info">
                <p>
                    Info | Support | Marketing
                </p>
                <p>
                    Terms of Use | Privacy Policy
                </p>
            </div>
        </div>
        )
}