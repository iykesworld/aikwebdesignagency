import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo-nav.png";
import { Link } from "react-scroll";
import menuIcon from '../../assets/menuNavIcon.png'
import closeIcon from '../../assets/closeNavIcon.png'

const navList = [
  {
    title: "Services",
    path: "services",
  },
  {
    title: "Portfolio",
    path: "portfolio",
  },
  {
    title: "About",
    path: "about",
  },
];

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const handleMenuToggle = ()=>{
        setMenuToggle(!menuToggle);
    }
  return (
    <header className="header">
      <nav className="nav">
      <a href="/" className="navlogo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav-lists">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                spy={true}
                smooth={true}
                duration={200}
                offset={-70}
                className="nav-link"
                activeClass="active"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
          <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={200}
          offset={-70}
          className="contact-btn"
          activeClass="active"
        >
          Contact
        </Link>
          </li>
        </ul>
        {
            menuToggle ? 
            <div onClick={handleMenuToggle} className="menu-btn"><img src={closeIcon} alt="close icon" /></div>
            :
            <div onClick={handleMenuToggle} className="menu-btn"><img src={menuIcon} alt="menu icon" /></div>
        }
      </nav>
      {/* mobile view */}
      {
        menuToggle&& 
        <div className="header-mobile">
      <nav className="nav-mobile">
        <ul className="nav-lists-mobile">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
              onClick={()=> setMenuToggle(false)}
                to={item.path}
                spy={true}
                smooth={true}
                duration={200}
                offset={-70}
                className="nav-link"
                activeClass="active"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
        onClick={()=> setMenuToggle(false)}
          to="contact"
          spy={true}
          smooth={true}
          duration={200}
          offset={-70}
          className="contact-btn"
          activeClass="active"
        >
          Contact
        </Link>
      </nav>
      </div>
      }
      
    </header>
  );
};

export default Navbar;
