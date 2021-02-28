import "./header.scss"
import { LOGO_URL, PROFILE_PIC_URL } from "../../requests"
import { FaCaretDown } from "react-icons/fa"

const Header = () => {
    return (
        <nav className="Header">
            <img className="Header__logo" src={LOGO_URL} alt="Logo" />
            <ul className="Header__primarynav Header__navlinks">
                <li className="Header__navlinks--link">Home</li>
                <li className="Header__navlinks--link">TV Series</li>
                <li className="Header__navlinks--link">Movies</li>
                <li className="Header__navlinks--link">Popular</li>
                <li className="Header__navlinks--link">My list</li>
            </ul>
            <div className="Header__secondarynav">
                <div className="Header__navitem">
                    <div className="Header__navsearch">
                        <input type="text" className="Header__navsearch--search" />
                        <div className="Header__navsearch--toggler"></div>
                    </div>
                </div>
                <div className="Header__navitem">
                    <div className="Header__navprofile">
                        <img
                            className="Header__navprofile--avatar"
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

export default Header
