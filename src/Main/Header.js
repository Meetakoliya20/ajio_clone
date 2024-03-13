import React from 'react'
import './header.css'
import logo from '../images/ajio-icon.svg';
import home_active from '../images/home-active.svg';
import sale from '../images/Artboard-asdads-asas.avif'
import men from '../images/men.avif'
import women from '../images/women.avif'
import kids from '../images/kids.avif'
import home from '../images/home.avif'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='search-box'>
          <img src={logo} alt='logo' />
          <span> Search by product, brands...</span>
        </div>
        <div className='header-icon'>
          <img src='https://assets.ajio.com/static/img/wishlist.svg' alt="like" className='img1' />
          <img src='https://assets.ajio.com/static/img/my-bag.svg' alt="img" className='img1' />
        </div>

      </div>
      <div className='items'>
        <div id="home">
          <img src={home_active} alt='home' className='home' />
        </div>
        <div id='sale'>
          <img src={sale} alt="sale" />
          <span>Sale</span>
        </div>

        <div id='men'>
          <img src={men} alt="men" />
          <span>Men</span>
        </div>


        <div id='women'>
          <img src={women} alt="women" />
          <span>Women</span>
        </div>


        <div id='kids'>
          <img src={kids} alt="kids" />
          <span>Kids</span>
        </div>

        <div id='homes'>
          <img src={home} alt="homes" />
          <span>Home</span>
        </div>

      </div>

    </div>
  )
}

export default Header;