import React from 'react'
import imag1 from '../images/footer1.png';
import imag2 from '../images/footer2.png';
import imag3 from '../images/footer3.webp';
import imag4 from '../images/footer4.png';
import imag5 from '../images/footer5.png';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div  className='footer_section'>
            <img src={imag1} alt="img1" className='footerimg'/>
            <span>Switch Stores</span>
        </div>

        <div  className='footer_section'>
            <img src={imag2} alt="img1" className='footerimg'/>
            <span>Explore</span>
        </div>
        <div  className='footer_section'>
            <img src={imag3} alt="img1" className='footerimg'/>
            <span>TRNDin</span>
        </div>
        <div  className='footer_section'>
            <img src={imag4} alt="img1" className='footerimg'/>
            <span>Categories</span>
        </div>
        <div  className='footer_section'>
            <img src={imag5} alt="img1" className='footerimg'/>
            <span>Account</span>
        </div>
    </div>
  )
}

export default Footer