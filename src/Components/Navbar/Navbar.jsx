import './Navbar.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

// installed react-scroll for clicking on about and reaching there
// npm install react-scroll

const Navbar = () => {

    // using usestate so that whenever we scroll we get changed color
    const [sticky, setSticky] = useState(false);
    // whenever we scroll it changes to true and color of navbar changes

    // this will be executed only once when the function will be loaded
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, [])

    // for toggling the menu, added at end

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        if (mobileMenu) {
            setMobileMenu(false);
        }
        else {
            setMobileMenu(true);
        }
    }

    // Link to='unique classname of component' offset is for distance from component top
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to='campus' smooth={true} offset={-220} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-230} duration={500}>Testimonials</Link></li>

                {/* <li><button className='btn'>Contact Us</button></li> instead of button write link tag*/}
                <li><Link to='contact' smooth={true} offset={-220} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar;