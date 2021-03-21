import "./navbar.scss";
import { useState, useEffect } from "react";
import useViewport from "../../hooks/useViewport";
import { LOGO_URL, PROFILE_PIC_URL } from "../../requests";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Navbar = () => {
	const { width } = useViewport();
	const [fixedNav, setFixedNav] = useState(false);
	const [profileNav, setProfileNav] = useState(false)
	const [searchInput, setSearchInput] = useState(false);
	const currentUser = useSelector(selectCurrentUser);

	const checkScroll = () => {
		window.scrollY > 70 ? setFixedNav(true) : setFixedNav(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	const toggleSearchInput = () => {
		setSearchInput(!searchInput);
	};

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
					<li className="Navbar__navlinks--link">
						<Link to="/tvseries">TV Series</Link>
					</li>
					<li className="Navbar__navlinks--link">
						<Link to="/movies">Movies</Link>
					</li>
					<li className="Navbar__navlinks--link">
						<Link to="/popular">New & Popular</Link>
					</li>
					<li className="Navbar__navlinks--link">
						<Link to="/mylist">My list</Link>
					</li>
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
						<div className="Navbar__navsearch--toggler" onClick={toggleSearchInput}>
							<FiSearch size="1.5em" />
						</div>
					</div>
				</div>
				<div className="Navbar__navitem">
					<div
						className={`Navbar__navprofile ${profileNav && 'active'}`}
						onClick={() => setProfileNav(!profileNav)}
					>
						<img
							className="Navbar__navprofile--avatar Navbar__navprofile--toggler"
							src={currentUser && currentUser.photoURL ? currentUser.photoURL : PROFILE_PIC_URL}
							alt="Profile Picture"
						/>
						<FaCaretDown className="Navbar__navprofile--toggler Navbar__navprofile--caret" />
						<div className={`Navbar__navprofile--content ${profileNav && 'active'}`}>
							{profileNav && (
								<ul className='Navbar__navprofile--content-wrp'>
									{currentUser && (
										<li className="Navbar__navlinks--link" onClick={() => auth.signOut()}>
											Sign Out
										</li>
									)}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
