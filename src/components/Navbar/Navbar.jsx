import "./navbar.scss";
import { useState, useEffect, useRef } from "react";
import useViewport from "../../hooks/useViewport";
import { LOGO_URL, PROFILE_PIC_URL } from "../../requests";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import useOutsideClick from "../../hooks/useOutsideClick";
import { changeSearchInputValue, clearSearchInputValue, fetchSearchResultsAsync } from "../../redux/search/search.actions";

const Navbar = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const { width } = useViewport();
	const [fixedNav, setFixedNav] = useState(false);
	const [genresNav, setGenresNav] = useState(false);
	const [profileNav, setProfileNav] = useState(false);
	const [searchInputToggle, setSearchInputToggle] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const genresNavRef = useRef();
	const profileNavRef = useRef();
	const currentUser = useSelector(selectCurrentUser);

	const checkScroll = () => {
		window.scrollY > 70 ? setFixedNav(true) : setFixedNav(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	useOutsideClick(genresNavRef, () => {
		if (genresNav) setGenresNav(false);
	});
	useOutsideClick(profileNavRef, () => {
		if (profileNav) setProfileNav(false);
	});

	const handleSearchInputToggle = () => {
		setSearchInputToggle(!searchInputToggle);
	};
	const clearSearchInputToggle = () => {
		setSearchInput('');
		dispatch(clearSearchInputValue());
		history.push('/browse');
	};

	const handleSearchInput = event => {
		const { value } = event.target;
		setSearchInput(value);
		dispatch(changeSearchInputValue(value));

		if (value.length > 0) {
			history.push(`/search?q=${value}`);
			dispatch(fetchSearchResultsAsync(value));
		}
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
				<div
					className={`Navbar__primarynav Navbar__navlinks ${
						genresNav ? "active" : ""
					}`}
					onClick={() => setGenresNav(!genresNav)}
				>
					<span className="Navbar__navlinks--link">Show more</span>
					<FaCaretDown className="Navbar__primarynav--toggler Navbar__primarynav--caret" />

					<div
						className={`Navbar__primarynav--content ${
							genresNav ? "active" : ""
						}`}
					>
						{genresNav && (
							<ul
								className="Navbar__primarynav--content-wrp"
								ref={genresNavRef}
							>
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
						)}
					</div>
				</div>
			)}
			<div className="Navbar__secondarynav">
				<div className="Navbar__navitem">
					<div className="Navbar__navsearch">
						<input
							type="text"
							placeholder="Search titles, people"
							value={searchInput}
							onChange={handleSearchInput}
							className={`
                                Navbar__navsearch--search
                                ${searchInputToggle ? "Navbar__navsearch--active" : ""}
                            `}
						/>
						<div
							className="Navbar__navsearch--toggler"
							onClick={handleSearchInputToggle}
						>
							<FiSearch size="1.5em" />
						</div>
						<div
							className={`Navbar__navsearch--clear ${searchInputToggle ? 'typing' : ''}`}
							onClick={clearSearchInputToggle}
						>
							<RiCloseFill />
						</div>
					</div>
				</div>
				<div className="Navbar__navitem">
					<div
						className={`Navbar__navprofile ${profileNav ? "active" : ""}`}
						onClick={() => setProfileNav(!profileNav)}
					>
						<img
							className="Navbar__navprofile--avatar Navbar__navprofile--toggler"
							src={
								currentUser && currentUser.photoURL
									? currentUser.photoURL
									: PROFILE_PIC_URL
							}
							alt="Profile Picture"
						/>
						<FaCaretDown className="Navbar__navprofile--toggler Navbar__navprofile--caret" />
						<div
							className={`Navbar__navprofile--content ${
								profileNav ? "active" : ""
							}`}
						>
							{profileNav && (
								<ul
									className="Navbar__navprofile--content-wrp"
									ref={profileNavRef}
								>
									{currentUser && (
										<li
											className="Navbar__navlinks--link"
											onClick={() => auth.signOut()}
										>
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
