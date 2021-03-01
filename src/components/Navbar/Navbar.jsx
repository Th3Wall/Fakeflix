import "./navbar.scss"
import { useState, useEffect } from 'react';
import { LOGO_URL, PROFILE_PIC_URL } from "../../requests"
import { FaCaretDown } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"

const Navbar = () => {
    const [fixedNav, setFixedNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setFixedNav(true);
            } else setFixedNav(false);
        })
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <nav className={`Navbar ${fixedNav ? 'Navbar__fixed' : ''}`}>
            <img className="Navbar__logo" src={LOGO_URL} alt="Logo" />
            <ul className="Navbar__primarynav Navbar__navlinks">
                <li className="Navbar__navlinks--link">Home</li>
                <li className="Navbar__navlinks--link">TV Series</li>
                <li className="Navbar__navlinks--link">Movies</li>
                <li className="Navbar__navlinks--link">Popular</li>
                <li className="Navbar__navlinks--link">My list</li>
            </ul>
            <div className="Navbar__secondarynav">
                <div className="Navbar__navitem">
                    <div className="Navbar__navsearch">
                        <input type="text" className="Navbar__navsearch--search" />
                        <div className="Navbar__navsearch--toggler">
                            <FiSearch size='1.5em' />
                        </div>
                    </div>
                </div>
                <div className="Navbar__navitem">
                    <div className="Navbar__navprofile">
                        <img
                            className="Navbar__navprofile--avatar"
                            src={PROFILE_PIC_URL}
                            alt="Profile Picture"
                        />
                        <FaCaretDown />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
