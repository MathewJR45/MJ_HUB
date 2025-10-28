import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { GoDot } from 'react-icons/go';
import Form from 'react-bootstrap/Form';
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";



function Footers() {
  
  return (
  <div className=' footer text-white' >
      <marquee direction="left" scrollamount="8" className="prodline mt-5 fs-5 ">
        <MdKeyboardArrowLeft className='fs-1 ' />  SUPERIOR PRODUCT LINE
        &nbsp;&nbsp;&nbsp; <GoDot className='fs-1 pb-1' />   SUPERIOR PRODUCT LINE

        &nbsp;&nbsp;&nbsp;<GoDot className='fs-1 pb-1' />
        SUPERIOR PRODUCT LINE   <GoDot className='fs-1 pb-1' />
        SUPERIOR PRODUCT LINE  <GoDot className='fs-1 pb-1' />
        SUPERIOR PRODUCT LINE

      </marquee>
      <Container className='pt-5 '>
        <Row>
          <Col lg={3} md={3} xs={12}  data-aos="fade-right"> <ul className='list-unstyled pt-1 '>
            <li className='fs-5 pb-3' style={{ color: ' rgb(210, 255, 8)' }}> QUICK LINKS </li>
            <li> Home</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          </Col>
          <Col lg={3} md={3} xs={12}  data-aos="fade-right" ><ul className='list-unstyled pt-1'>
            <li className='fs-5  pb-3 ' style={{ color: ' rgb(210, 255, 8)' }}>POLICIES</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Return Policy</li>
            <li>Cancellation Policy</li>
            <li>Create an exchange</li>
          </ul>
          </Col>
         <Col lg={6} md={6} xs={12} className='ps-5' data-aos="fade-left"><h1 >MJ</h1>
            <p className='fs-5 pt-4 w-75'>STAY IN THE LOOP WITH OUR WEEKLY NEWSLETTER</p>
            <Form>
              <Form.Group className="pb-3 " controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Enter Your Email " className='bg-dark text-white w-75' />
              </Form.Group>
            </Form>
            <ul className='list-unstyled d-flex gap-3 fs-4 ' >
              <li><FaInstagram /></li>
                    <li><IoLogoYoutube /></li>
                       <li><RiTwitterXFill /></li>
            </ul>
          </Col>
        </Row>
        <div data-aos="fade-up">   <p className='text-center fs-2 mt-4'style={{color: ' rgba(192, 235, 4, 1)' }} >JERSEYS BUILTS FOR LEGENDS <AiFillThunderbolt /> </p>
        <p className='text-center fs-5 mt-5 pb-5 pe-5 '>© 2025 Mathew Jersey Hub </p></div>
     
      </Container>

    </div>
  )

  }
export default Footers