import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import full from '../assets/Brazil/full.jpg';
import top from '../assets/Brazil/top.jpeg';
import side from '../assets/Brazil/side.png';
function ResponsiveExample() {
  return (
    <div className='bbg pt-4 pb-5'>
      <Container className='pt-5' style={{}}>
        <Row className=' d-flex'>
          <Col xs={12} md={8} lg={5} data-aos="slide-up">
            <h1>QUALITY IS OUR SPECIALITY</h1>
          
            <p className=' pt-4' style={{ textTransform: 'capitalize', fontSize: '24px', color: 'white' }}> The Mathew Jersey Hub has always been and will be known for providing the best quality along with the best service consistently, the precision and minute details in our products is what makes us stand out when compared to our competition, our products are imported only when we know the fabric is right. You won't find the same quality anywhere in the market.</p>
          </Col>
          <Col lg={7} xs={12} className='d-flex '>
            <Col lg={5} md={8} xs={6} className='d-none d-sm-block' >
              <Col className='' data-aos="fade-down" > <img src={top} alt="" style={{ width: 'auto', height: '300px', objectFit: 'cover' }} /> </Col>
              <Col className='pt-2' data-aos="fade-up">  <img src={side} alt="" style={{ width: '254px', height: '200px', objectFit: 'cover' }} /></Col>
            </Col>
            <Col lg={6} md={4} xs={6}>
              <img src={full} alt="" style={{ height: '508px', objectFit: 'cover' }} />
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResponsiveExample;