import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home'
import Next from './components/Next';
import Brazil from './components/Brazil'
import Club from './components/Club';
import Footer from './components/Footer';
import './App.css';
import Detail from './components/Detail';
import Product from './components/Product';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
function App() {
   useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
   
 <Nav/>
    
<Home/>
       <Next/> 
         <Product/>
       <Brazil/>
        <Club/>
         <Detail/>   
           <Footer/>  
     
         
     
 
  
           
 
    </>
  )
}

export default App;
