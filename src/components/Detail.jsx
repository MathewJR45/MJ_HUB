import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/brand/img1.png'
import img2 from '../assets/brand/img2.png'
import img3 from '../assets/brand/img3.png'
import img4 from '../assets/brand/img4.png'
function ContainerExample() {
  const mapping = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
  ];
  return (
    <Container className='mb-3' >
      <div >
        <marquee direction="right" scrollamount="8" className=" mx-1">
          <div className='d-flex justify-content-between    '>
            {
              mapping.map((src, i) => (
                <div key={i} className=''>
                  <img src={src.img} alt="img" />
                </div>
              ))
            }
          </div>
        </marquee>
      </div>
      <Row className='text-center pt-3 '>
        <Col lg={4}><h1 style={{ color: '#b6d602ff' }}>65+</h1>
          <p className='fs-2'>STORES</p>
        </Col>
        <Col lg={4}><h1 style={{ color: '#b6d602ff' }}>300+</h1>
          <p className='fs-2'>DESIGNS</p>
        </Col>
        <Col lg={4}><h1 style={{ color: '#b6d602ff' }}>80000+</h1>
          <p className='fs-2'>CUSTOMERS</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;