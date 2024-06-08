import React, {useState} from 'react'
import { Link } from "react-scroll";
import './Navbar.css';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <div>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className="logo" src="" alt="" />

                <ul>
                    <li>
                        <Link activeClass="active" to="hero" smooth spy offset={-80}  className="menu-item">Home</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="hero" smooth spy offset={-120}  className="menu-item">Skills</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="hero" smooth spy offset={-100}  className="menu-item">Work Experience</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="hero" smooth spy offset={-100}  className="menu-item">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
