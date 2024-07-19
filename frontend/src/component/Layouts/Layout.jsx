import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import Logo from './Logo/logo1.png'
import "bootstrap/dist/css/bootstrap.css";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
 import './Layout.css'
 import {BsTwitter} from 'react-icons/bs'
import{AiFillInstagram}  from 'react-icons/ai';

import {ImFacebook} from 'react-icons/im';
export default function Layout() {
  return (
    <div>
       <div class="announcement-bar">
        <p>Grand Solde! Up to 50% off on selected items. <a href="#">Shop Now</a></p>
    </div>
              <header style={{marginTop:'-50PX'}}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white',height:'50px',marginBottom:'50px'}}> 
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            
            <Link className='navbar-brand'  to=''><img src={Logo} alt=""  width={100} style={{marginTop:'10px'}}/></Link>
            <ul className="navbar-nav">
           <li className='nav-item'><Link className='nav-link mr-3' id='Links' to={'/Shop'}>Shop</Link></li>
           <li className='nav-item'> <Link className='nav-link mr-3' id='Links' to={'/Blog'}>Blog</Link></li>
           <li className='nav-item'><Link className='nav-link mr-3' id='Links' to={'/contact'}>Contact us</Link></li>
          </ul></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="icons">
          <div className="collapse navbar-collapse" id='search'>
           
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" id='icon' to={'/User'}><FaUser style={{ fontSize:'20px',marginLeft:'20px' }} /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id='icon' to={'/Basket'}><SlBasket  style={{ fontSize:'20px' }} /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id='icon' to={'/heart'}><AiOutlineHeart  style={{ fontSize:'20px' }} /></Link>
              </li>
            </ul>
          </div>
        </div></div>
      </nav>
      <nav>
      <ul class="submenu">
        
                    <li><a href="#">Face Care</a></li>
                    <li><a href="#">Body Care</a></li>
                    <li><a href="#">Makeup</a></li>
                    <li><a href="#">Hair Care</a></li>
                    <li><a href="#">Fragrance</a></li>
                </ul>
           
      </nav>
    </header>
    <main> <Outlet/></main>
    <footer> <div className="footer"> 
    <div className="secContaire container grid">
         
      <div className="logoDiv">
<div className="footerLogo">
        <img  src={Logo} width={200}/></div>
      
      <div className="socials flex">
      <ImFacebook className='icon' />
      <BsTwitter  className='icon' />
      <AiFillInstagram className='icon' />
      </div>
      <div className="footerLinks">
        <span className="linkTitle">
          inforamtion
        </span>
        <li><a href="#">Home</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">deplome</a></li>
        <li><a href="#">equipe</a></li>
        <li><a href="#">formation</a></li>
      </div>
      <div className="footerLinks">
        <span className="linkTitle">
          Helful Links
        </span>
        <li><a href="#">Home</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">deplome</a></li>
        <li><a href="#">equipe</a></li>
        <li><a href="#">formation</a></li>
      </div>
      <div className="footerLinks">
        <span className="linkTitle">
          contact details
        </span>
        <span className="phone">+212 66014606</span>
        <span className="email">alyaemounim@gmail.com</span>
       
      </div>
</div>
    </div>
  </div></footer>
  </div>
  )
}
