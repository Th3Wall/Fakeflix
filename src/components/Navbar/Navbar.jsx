import "./navbar.scss"
import { useState, useEffect } from "react"
import useViewport from "../../hooks/useViewport"
import { LOGO_URL, PROFILE_PIC_URL } from "../../requests"
import { FaCaretDown } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { Link } from "react-router-dom"

const Navbar = () => {
    const { width } = useViewport()
    const [fixedNav, setFixedNav] = useState(false)
    const [searchInput, setSearchInput] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 70 ? setFixedNav(true) : setFixedNav(false)
        })
        return () => window.removeEventListener("scroll")
    }, [])

    const toggleSearchInput = () => {
        setSearchInput(!searchInput)
    }

    return (
        <nav className={`Navbar ${fixedNav ? "Navbar__fixed" : ""}`}>
            <Link to="/">
                <img className="Navbar__logo" src={LOGO_URL} alt="Logo" />
            </Link>
            {width >= 1024 ? (
                <ul className="Navbar__primarynav Navbar__navlinks">
                    <li className="Navbar__navlinks--link">
                        <Link to="/browse">Home</Link>
                    </li>
                    <li className="Navbar__navlinks--link">TV Series</li>
                    <li className="Navbar__navlinks--link">Movies</li>
                    <li className="Navbar__navlinks--link">Popular</li>
                    <li className="Navbar__navlinks--link">My list</li>
                </ul>
            ) : (
                <div className="Navbar__primarynav Navbar__navlinks">
                    <span className="Navbar__navlinks--link">Show more</span>
                    <FaCaretDown />
                </div>
            )}
            <div className="Navbar__secondarynav">
                <div className="Navbar__navitem">
                    <div className="Navbar__navsearch">
                        <input
                            type="text"
                            placeholder="Search titles"
                            className={`
                                Navbar__navsearch--search
                                ${searchInput ? "Navbar__navsearch--active" : ""}
                            `}
                        />
                        <div
                            className="Navbar__navsearch--toggler"
                            onClick={toggleSearchInput}
                        >
                            <FiSearch size="1.5em" />
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
