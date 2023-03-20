import { Carousel } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default function BootstrapCarousel() {
  return (
    <div className="image_slider">
      <Container>
      <Row>
        <Col md={2} >
          <div className='carou'> 
            
          </div>
        </Col>
        <Col md={8} >
          <div className='carou'> 
          <Carousel>
            <Carousel.Item>
              <img
                className="imgSlider"
                src="https://www.nifs.ac.lk/themes/custom/nifslk/dist/img/nifs-enterence.jpg"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgSlider"
                src="https://www.nifs.ac.lk/sites/default/files/news_events%202022-12/IMG_9715_LR.jpg"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imgSlider"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsETq07K70u7_TzlzvNQHOQoGiF1F_6vG3w&usqp=CAU"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
          </div>
        </Col>
        <Col md={2} >
          <div className='carou'> 
            
          </div>
        </Col>
      </Row>
      </Container>
      
    </div>
  );
}

