import React from "react"
import '../Footer.css'


export default function Footer() {
    
    return (
        <div className='footer'>
            <div  className="sb_footer-links">
                
                <a href="https://www.nifs.ac.lk/">
                    <img className='socialimg' src='web.png'/>
                </a>
                
                <a href="https://www.facebook.com/nifslk/"> 
                    <img className='socialimg' src='facebook.png'/>
                </a>
                
                <a href="https://lk.linkedin.com/company/nifslk">
                    <img className='socialimg' src='linkedin.png'/>
                </a>
                
                <a href="https://www.instagram.com/nifs_lk/?hl=en">
                    <img className='socialimg' src='instagram.png'/>
                </a>
                
                <a href="https://twitter.com/nifslk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <img className='socialimg' src='twitter.png'/>
                </a>
                
                <a href="https://www.youtube.com/@IFSweba">
                    <img className='socialimg' src='youtube.png'/>
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