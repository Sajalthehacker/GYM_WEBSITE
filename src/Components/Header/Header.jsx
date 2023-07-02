import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
    const isMobileScreen = window.innerWidth <= 768 ? true : false;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='header'>
            <img src={Logo} alt="logo" className='logo' />

            { (menuOpen === false && isMobileScreen === true) ?
                <div className='bars-back'>
                    <img src={Bars} alt="bars-icon" className='bars-icon' onClick={() => {
                        setMenuOpen(true)
                    }} />
                </div>
                :
                <ul className='header-menu'>
                    <li><Link to='hero_id' span={true} smooth={true} onClick={() => { setMenuOpen(false) }}>Home</Link></li>
                    <li><Link to='programs_id' span={true} smooth={true} onClick={() => { setMenuOpen(false) }}>Programs</Link></li>
                    <li><Link to='reasons_id' span={true} smooth={true} onClick={() => { setMenuOpen(false) }}>Why us</Link></li>
                    <li><Link to='plans_id' span={true} smooth={true} onClick={() => { setMenuOpen(false) }}>Plans</Link></li>
                    <li><Link to='testimonials_id' span={true} smooth={true} onClick={() => { setMenuOpen(false) }}>Testimonials</Link></li>
                </ul>
            }

        </div>
    )
}

export default Header
