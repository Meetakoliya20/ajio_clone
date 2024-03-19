import React, { useState } from 'react'
import './header.css'
import logo from '../images/ajio-icon.svg';
import home_active from '../images/home-active.svg';
import sale from '../images/Artboard-asdads-asas.avif'
import men from '../images/men.avif'
import women from '../images/women.avif'
import kids from '../images/kids.avif'
import home from '../images/home.avif'
import like from '../images/like.svg'
import cart from '../images/cart.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [activeTab, setActivetab] = useState("home");
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='search-box'>
          <img src={logo} alt='logo' />
          <span> Search by product, brands...</span>
        </div>
        <div className='header-icon'>
          <img src={like} alt="like" className='img1' />
          <img src={cart} alt="img" className='img1' />
        </div>

      </div>
      <div className='items'>

        <div id="home" className={activeTab === 'home' ? 'active' : ''} onClick={() => setActivetab("home")}>
          <NavLink to="/ ">
            <img src={home_active} alt='home' className='home' />
            </NavLink>
        </div>

        <div id='sale' className={activeTab === 'sale' ? 'active' : ''} onClick={() => setActivetab("sale")}>
          <NavLink to="/products">
            <img src={sale} alt="sale" />
            <span>Sale</span>
          </NavLink>
        </div>
        <div id='men' className={activeTab === 'men' ? 'active' : ''} onClick={() => setActivetab("men")}>
          <NavLink to="/products">
            <img src={men} alt="men" />
            <span>Men</span>
          </NavLink>
        </div>
        <div id='women' className={activeTab === 'women' ? 'active' : ''} onClick={() => setActivetab("women")}>
          <NavLink to="/products">
            <img src={women} alt="women" />
            <span>Women</span>
          </NavLink>
        </div>
        <div id='kids' className={activeTab === 'kids' ? 'active' : ''} onClick={() => setActivetab("kids")}>
          <NavLink to="/products">
            <img src={kids} alt="kids" />
            <span>Kids</span>
          </NavLink>
        </div>
        <div id='homes' className={activeTab === 'homes' ? 'active' : ''} onClick={() => setActivetab("homes")}>
          <NavLink to="/products">
            <img src={home} alt="homes" />
            <span>Home</span>
          </NavLink>
        </div>
      </div>


    </div>
  )
}

export default Header;