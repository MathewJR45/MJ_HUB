import React from 'react'
import img1 from '../assets/product/img1.jpg'
import img3 from '../assets/product/img3.jpg'
import img4 from '../assets/product/img4.jpg'
import img5 from '../assets/product/img5.jpg'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
function Products() {
    const mapping = [
        { img: img1, text: 'Bayern Munich Home Kit 2025-26', price: 'Rs.499.00 ' },
        { img: img3, text: 'Real Marid Home Kit 2025-26', price: 'Rs. 599.00 ' },
        { img: img5, text: 'Barcelona Home Kit 2025-26', price: 'Rs. 699.00 ' },
        { img: img4, text: 'Man United way Kit 2025-26', price: 'Rs. 499.00 ' }
    ];
    return (
        <div className='container-fluid mb-5 '>
            <div className='d-flex  ps-3 row pt-4'>
                <div className='col-lg-10'  >         <h1 className='fs-1 text-dark' data-aos="slide-right"  >BEST SELLER</h1>
                    <p className='text-green fs-5' data-aos="slide-right" >2025/26 Season </p>
                </div>
                <div className='fs-1 col-lg-2 d-none d-sm-block'>
                    <TfiArrowCircleLeft className='m-1' />
                    <TfiArrowCircleRight className='m-1' />
                </div>
            </div>
            <div className=' row d-flex'>
                {
                    mapping.map((src, i) => (
                        <div key={i} className='col-lg-3 col-md-6 col-sm-6 ' data-aos="slide-up" >
                            <img src={src.img} alt="img" className=' h-75 w-100 pt-4' />
                            <div className='text-center pt-2  '> {src.text}</div>
                            <h6 className='text-center pt-2 '>{src.price}</h6>
                            <div className='border border-dark rounded-5 w-50 p-1 text-center  align-items-center mx-auto text-white  bg-dark'>Buy Now</div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Products