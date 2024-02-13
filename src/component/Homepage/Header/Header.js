import { useState } from "react";
import './Header.css'

import { Link } from 'react-router-dom';
const Header = () => {
    const [show, setShow]=useState(false);
   
    return (
     <header className="header" id="home">
    <nav class="nav container">
      <a href="#home" className="nav-logo"><span><img src='https://cdn.dribbble.com/users/2689351/screenshots/8646516/media/96e00cdd32ade127e6ca4419ec2dd9f3.png?resize=768x576&vertical=center' /></span></a>
      


      <div className={`nav-menu ${show ? 'show-menu' : ''}`} id="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link"  onClick={()=> setShow(!show)}>
                Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={()=> setShow(!show)}>
                About</a>
          </li>
          <li className="nav-item">
            <a href="#program" className="nav-link"  onClick={()=> setShow(!show)}>
                Program</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link"  onClick={()=> setShow(!show)}>
                Pricing</a>
          </li>
          <div className="nav-close" id="nav-close" onClick={()=> setShow(!show)}>
            <i className="ri-close-line nav-close"></i>
          </div>
        </ul>

        <Link to="/signin" className="nav-button">
      start free trial
    </Link>
    
      </div>

      <div class="nav-toggle" onClick={()=> setShow(!show)}>
        <i class="ri-menu-4-line"></i>
      </div>
    
    </nav>
  </header>
    );
};
export default Header;