import React, { useState, useEffect } from 'react'
import './Nav.css'
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import GAQ from './GAQ'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
let ScrollLink = Scroll.Link;

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <Link to='header' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src="Images/logo3.png" alt="A-Z Landscape & Maintenance, LLC" />
                    </Link>
                    <div class="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' activeClass="active" spy={true} smooth={true} offset={-60} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-drop-li'>
                            <Nav id='drop-nav' variant="tabs" className='nav-links'>
                                <NavDropdown title="Services" id="nav-dropdown">
                                    <NavDropdown.Item><Link to='/landscaping'>Landscaping</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/hardscaping'>Hardscaping</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/outdoorliving'>Outdoor Living</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/masonry'>Masonry & Stone</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/maintenence'>Maintenence</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/irrigation'>Irrigation Repair</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to='/excavation'>Excavation</Link></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </li>
                        <li className='nav-item'>
                            <Link to='projects' activeClass="active" spy={true} smooth={true} offset={-40} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Recent Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <ScrollLink to='contact' activeClass="active" spy={true} smooth={true} offset={-70} duration={100} className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                    {/* {button && <GAQ>Resume</GAQ>} */}
                    <p>512-888-8888</p>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
