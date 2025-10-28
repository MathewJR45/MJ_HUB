import React from 'react';
import img3 from '../assets/club/barca.jpg';
import img2 from '../assets/club/madrid19-min.jpg';
import img1 from '../assets/club/milan15-min.jpg';
import img4 from '../assets/club/mu3-min.jpg';
import { MdDoubleArrow } from "react-icons/md";
function Clubs() {
  const mapping = [
    { img: img3, text: 'BARCALONA' },
    { img: img2, text: 'REAL MADIRD' },
    { img: img1, text: 'AC MILAN' },
    { img: img4, text: 'MANCHESTER' }
  ];
  return (
    <div className='club' data-aos="fade-up">
      <section className='container pt-5 text-center'>
        <h2 className='fs-1 fw-semibold' style={{ color: ' rgba(101, 129, 1, 1)' }}>WEAR YOUR PASSION.OWN YOUR GAME </h2>
        <p className='fs-6'> Shop By Teams That Rule The Game.</p>
        <div className='row d-flex h-12 w-5  pt-5'>
          {mapping.map((src, i) => (
            <div key={i} className='col-lg-3 col-md-6 col-sm-12 ' data-aos="fade-up" data-aos-delay="500">
              <img src={src.img} alt="img" className='jer-img h-75 w-100' />
              <p className='fs-4 pt-4 text-start' >{src.text}<MdDoubleArrow className='fs-3 pb-1 ps-1' /></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Clubs