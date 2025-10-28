import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineShopping } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import './Nav.css'
function Mathew() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Navbar id="navbar" expand="lg" className={`fixed-top navbar-expand-lg ${scrolled ? 'navbar-dark' : 'navbar-light bg-transparent'}`} style={scrolled ? { backgroundColor: '#000000ff' } : {}}>
      <Container>
        <Navbar.Brand href="#home" className=' brand fs-2 '>MJ HUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto  gap-3 ps-5">
            <Nav.Link href="#home" className='fs-6 text-white' >Home</Nav.Link>
            <Nav.Link href="#link" className='fs-6 text-white'>Shop</Nav.Link>
            <Nav.Link href="#link" className='fs-6 text-white'>Categories</Nav.Link>
            <Nav.Link href="#link" className='fs-6  text-white'>Exchange</Nav.Link>
          </Nav>
          <Nav className="d-none d-lg-flex gap-3">
            <Nav.Link href="/contact" className='icons fs-3' ><AiOutlineShopping /></Nav.Link>
            <Nav.Link href="/contact" className='icons fs-3 '><FiSearch /></Nav.Link>
            <Nav.Link href="/services" className='icons fs-3'><VscAccount /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Mathew;