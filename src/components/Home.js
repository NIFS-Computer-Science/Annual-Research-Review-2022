import img1 from '../images/ARRFrontCover.jpg';
import { Link } from "react-scroll"
import Popup from './Popup';
import React from "react";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <p className='paragrapgh'>Takimata gubergren et sed justo labore magna elitr sed voluptua sadipscing, elitr ipsum lorem diam no ipsum, labore eos dolore et aliquyam ut magna sea sed, dolor gubergren dolores takimata sit vero magna gubergren, et et takimata et eos erat. Voluptua sanctus lorem gubergren erat. Dolor eirmod no no dolor no, et dmy no vero dolsea eos, ea.</p>
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
                        
                          <a href="https://www.nifs.ac.lk/dissemination/reports">Link 1</a> <br />
                          <a href="https://www.nifs.ac.lk/">Link 2</a> <br />
                          <a href="https://www.nifs.ac.lk/facilities">Link 3</a> <br />
                          <a href="https://www.nifs.ac.lk/dissemination/reports">Link 4</a> <br />
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