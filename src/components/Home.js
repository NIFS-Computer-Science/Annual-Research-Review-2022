import img1 from '../images/ARRFrontCover.jpg';
import { Link } from "react-scroll"
import Popup from './Popup';
import React from "react";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {pdfjs } from 'react-pdf';
import { faBook, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faAppStore, faAppStoreIos, faChrome, faWindows } from '@fortawesome/free-brands-svg-icons';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Home() {
  const [buttonPopup, setButtonPopup] = React.useState(false);
 
  return (
    <div className='home' id='home'> 
    <Container>
      <Row>
        <Col md={6} >
          <div className='img1'> 
            <img src={img1} alt="" className='img1'/>
          </div>
        </Col>
        <Col md={6} >
          <div className='home_text'>
            <div className='hometopic'>Annual Research Review 2022</div>
            <p>Takimata gubergren et sed justo labore magna elitr sed voluptua sadipscing, elitr ipsum lorem diam no ipsum, labore eos dolore et aliquyam ut magna sea sed, dolor gubergren dolores takimata sit vero magna gubergren, et et takimata et eos erat. Voluptua sanctus lorem gubergren erat. Dolor eirmod no no dolor no, et dmy no vero dolsea eos, ea.</p>
              <Container>
                <Row>
                  <Col sm={6}>
                  <a className='homebtn'>
                    <Link to="flip">
                      <div className='homebtns'>Read Online</div>
                    </Link>
                  </a>
                  </Col>

                  <Col sm={6}>
                  <a className='homebtn'>
                    <div className='homebtns' onClick={() => setButtonPopup(true)}>Download</div>
                      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3>Download Annual Research Review 2022</h3>
                        
                        <Container>
                          <Row>
                            <Col md={6} >
                              <div className='pop'> 
                                <h4>EPUB Version</h4>
                                <FontAwesomeIcon icon={faBook} className={'popupimg'}></FontAwesomeIcon>
                                  <a href='#' className='popupdown'>Download</a>
                                  <div className='epub-popup'>
                                    <p>To read epub please download and install</p>
                                    <div className='epub-icons'>
                                      <a href='https://icecreamapps.com/Ebook-Reader/' target='_blank'><FontAwesomeIcon className='epub-icon' icon={faWindows}/></a>
                                      <a href='https://play.google.com/store/apps/details?id=com.foobnix.pdf.reader&hl=en&gl=US' target='_blank'><FontAwesomeIcon className='epub-icon' icon={faAndroid}/></a>
                                      <a href='https://apps.apple.com/us/app/apple-books/id364709193' target='_blank'><FontAwesomeIcon className='epub-icon' icon={faAppStoreIos}/></a>
                                      <a href='https://chrome.google.com/webstore/detail/epubreader/jhhclmfgfllimlhabjkgkeebkbiadflb?hl=en' target='_blank'><FontAwesomeIcon className='epub-icon' icon={faChrome}/></a>
                                    </div>
                                  </div>
                              </div>
                            </Col>
                            <Col md={6} >
                              <div className='pop'> 
                                <h4>PDF Version</h4>
                                <FontAwesomeIcon icon={faFilePdf} className={'popupimg'}></FontAwesomeIcon>

                                <a href="Annual Research Review 2019 EN.pdf" className='popupdown' download="Annual Research Review 2019 EN.pdf">Download </a>
                              
                              </div>
                            </Col>
                          </Row>
                        </Container>
                          {/* <a href="https://www.nifs.ac.lk/dissemination/reports">Link 1</a>
                          <a href="https://www.nifs.ac.lk/">Link 2</a>
                          <a href="https://www.nifs.ac.lk/facilities">Link 3</a>
                          <a href="https://www.nifs.ac.lk/dissemination/reports">Link 4</a> */}
                          {/* paste the 4 download links here */}
                        
                      </Popup>
                  </a>

                  </Col>
                </Row>
              </Container>
          </div>
        </Col>
      </Row>
      </Container>
      
      
      </div>
    )
}