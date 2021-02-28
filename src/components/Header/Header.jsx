import "./header.scss"
import { LOGO_URL } from "../../requests"

const Header = () => {
    return (
        <nav className="Header">
            <img className="Header__logo" src={LOGO_URL} alt="Logo" />
            <ul className="Header__navlinks">
                <li className="Header__navlinks--link">Home</li>
                <li className="Header__navlinks--link">TV Series</li>
                <li className="Header__navlinks--link">Movies</li>
                <li className="Header__navlinks--link">Popular</li>
                <li className="Header__navlinks--link">My list</li>
            </ul>
        </nav>
    )
}

export default Header
