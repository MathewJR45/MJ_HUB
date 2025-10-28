import React from 'react'
import { GoDot } from "react-icons/go";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../assets/retro_4.jpg";
import img2 from "../assets/anthem.jpg";
import img3 from "../assets/blueman.jpg"
import { MdDoubleArrow } from "react-icons/md";
import './Next.css';
function Next() {
  const mapping = [
    { img: img1, text: 'RETRO JERSEY ' },
    { img: img3, text: 'JERSEY WITH SHORTS' },
    { img: img2, text: 'ANTHEM JERSEY ' }

  ];
  return (
    <div className='details'>
      <section className='intro text-center pt-5  '>
        <h3 className='title fs-1 ' data-aos="fade-up">MATHEW JERSEY HUB</h3>
        <p className='para-intro pt-3'>Football is more than just a sport, it's a passion, a community, and a way of life.In recent years, the love for football has been growing rapidly across India,  <br /> reaching fans not only in major cities but also in tier 3 and tier 4 towns, where the spirit and enthusiasm for the game are just as powerful.</p>
      </section>
      <marquee direction="left" scrollamount="10" className="clearance mx-1">
        <MdKeyboardArrowLeft className='fs-1' />   UPTO 70% OFF ON CLEARANCE SALE  &nbsp;&nbsp;&nbsp; <GoDot className='fs-1' /> UPTO 70% OFF ON CLEARANCE SALE
        &nbsp;&nbsp;&nbsp;<GoDot className='fs-1' />
        UPTO 70% OFF ON CLEARANCE SALE
      </marquee>
      <marquee direction="right" scrollamount="10" className="clearance1 mx-1 ">
        <GoDot className='fs-1' />    UPTO 70% OFF ON CLEARANCE SALE    &nbsp;&nbsp;&nbsp; <GoDot className='fs-1' /> UPTO 70% OFF ON CLEARANCE SALE
        &nbsp;&nbsp;&nbsp;
        UPTO 70% OFF ON CLEARANCE SALE  <MdOutlineKeyboardArrowRight className='fs-1' />
      </marquee>

      <section className='hot-sale container'>
        <h2 className='fs-1' style={{ color: ' rgb(214, 255, 68)' }} data-aos="slide-right">HOT SALES CATEGORIES <MdDoubleArrow className='fs-1 pb-2 ps-1' /> </h2>
        <div className='row d-flex h-12 w-5  pt-5'>
          {mapping.map((src, i) => (
            <div key={i} className='col-lg-4 col-md-6 col-sm-12 ps-4 pt-3 'data-aos="fade-up">
              <img src={src.img} alt="img" className='jer-img h-75 w-75' />
              <p className='fs-4 pt-3 mb-5'>{src.text} <span class="superscript">35</span> </p>


            </div>
          ))}
        </div>





      </section>
    </div>

  )
}

export default Next