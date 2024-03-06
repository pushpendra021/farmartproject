import React, { useState } from "react";
import companyLogo from './company_logo.png';
import './navbar.css';
import { FaLinkedin,FaYoutube} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar =() =>{
    const [showMediaIcons, setShowMediaIcons] = useState(false);
return(<>
<nav className="main-nav">
{/* 1st logo */}
<div className="logo">
<img src={companyLogo} alt="Company Logo" />
<h2><span>F</span>ar
<span>M</span>art
</h2>
</div>

{/* 2nd part list like home ,product,market */}
<div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
<ul>
<li>
<a href="#">Home</a>
</li>
<li>
<a href="#">Market</a>
</li>
<li>
<div className="dropdown">
    <a href="#">Service</a>
    <div className="dropdown-content">
      <a href="#">Service 1</a>
      <a href="#">Service 2</a>
      <a href="#">Service 3</a>
    </div>
  </div>
</li>
<li>
<a href="#">Contact</a>
</li>
<li>
<a href="#">About</a>
</li>
<li>
<div className="dropdown">
    <a href="#">Account</a>
    <div className="dropdown-content">
      <a href="#">Login</a>
      <a href="#">Sign Up</a>
    </div>
  </div>
</li>
</ul>


</div>
{/* 3rd social media */}
<div className="social-media">
<ul>
{/* <li>
<a href="https://www.linkedin.com/in/pushpendra-kumar-bais-1187b8161/" target='_pushpendra'><FaLinkedin className="linkedin"/></a>

</li>
*/}

<li>
      {/* Search Icon and Input Field */}
      <div className="search-container">
        <input type="text" placeholder="Search" />
        {/* <button type="submit"><i className="fa fa-search"></i></button> */}
      </div>
    </li>

</ul>

 {/* hamburget menu start  */}
 <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
            </a>
          </div>

</div>


</nav>
</>

);
}
export default Navbar;

