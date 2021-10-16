import "./navbar.scss";
import { useState, useRef } from "react";
import useViewport from "../../hooks/useViewport";
import useScroll from "../../hooks/useScroll";
import useOutsideClick from "../../hooks/useOutsideClick";
import { motion } from "framer-motion";
import { navbarFadeInVariants } from "../../motionUtils";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import Searchbar from "../Searchbar/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { signOutStart } from "../../redux/auth/auth.actions";
import flowtys from "../../assets/flowtys.webp";
import avatar1 from "../../assets/avatar/Flowtys_Dead.jpg";
import avatar2 from "../../assets/avatar/Flowtys_FuckedUp.jpg";
import avatar3 from "../../assets/avatar/Flowtys_Grin.jpg";
import avatar4 from "../../assets/avatar/Flowtys_HeartEyes.jpg";
import avatar5 from "../../assets/avatar/Flowtys_Idk.jpg";
import avatar6 from "../../assets/avatar/Flowtys_LOL.jpg";
import avatar7 from "../../assets/avatar/Flowtys_Peter.jpg";
import avatar8 from "../../assets/avatar/Flowtys_Puzzled.jpg";
import avatar9 from "../../assets/avatar/Flowtys_StarEyes.jpg";
import avatar10 from "../../assets/avatar/Flowtys_Wink.jpg";
import avatar11 from "../../assets/avatar/Flowtys_Wubldbeldbsofpe.jpg";
import avatar12 from "../../assets/avatar/Flowtys_YouDontSay.jpg";
import avatar13 from "../../assets/avatar/Flowtys_Yum.jpg";
import { randomize } from "../../utils";
import { useLocation } from 'react-router-dom'

const Navbar = () => {
	const { width } = useViewport();
	const isScrolled = useScroll(70);
	const [genresNav, setGenresNav] = useState(false);
	const [profileNav, setProfileNav] = useState(false);
	const genresNavRef = useRef();
	const profileNavRef = useRef();
	const currentUser = useSelector(selectCurrentUser);
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13];
  const avatar = avatars[randomize(avatars)];
	const dispatch = useDispatch();
  const location = useLocation();

	useOutsideClick(genresNavRef, () => {
		if (genresNav) setGenresNav(false);
	});
	useOutsideClick(profileNavRef, () => {
		if (profileNav) setProfileNav(false);
	});

  const currentPage = (path) => {
    if (path.startsWith('/movies')) { return 'Classics'; }
    if (path.startsWith('/cartoons')) { return 'Cartoons'; }
    if (path.startsWith('/mylist')) { return 'M	My List'; }
    return 'Home';
  }

	return (
		<>
			<motion.nav
				className={`Navbar ${isScrolled && "Navbar__fixed"}`}
				variants={navbarFadeInVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<Link to="/">
					<img className="Navbar__logo" src={flowtys} alt="" />
				</Link>
				{width >= 1024 ? (
					<ul className="Navbar__primarynav Navbar__navlinks">
						<li className="Navbar__navlinks--link">
							<NavLink to="/browse" activeClassName="activeNavLink">
								Home
							</NavLink>
						</li>
						<li className="Navbar__navlinks--link">
							<NavLink to="/cartoons" activeClassName="activeNavLink">
                Cartoons
							</NavLink>
						</li>
						<li className="Navbar__navlinks--link">
							<NavLink to="/movies" activeClassName="activeNavLink">
                Classics
							</NavLink>
						</li>
						<li className="Navbar__navlinks--link">
							<NavLink to="/mylist" activeClassName="activeNavLink">
								My List
							</NavLink>
						</li>
					</ul>
				) : (
					<div
						className={`Navbar__primarynav Navbar__navlinks ${isScrolled && "Navbar__primarynav--scrolled"}`}
						onClick={() => setGenresNav(!genresNav)}
					>
						<span className="Navbar__navlinks--link">{currentPage(location.pathname)}</span>
						<FaCaretDown className="Navbar__primarynav--toggler Navbar__primarynav--caret" />
						<div
							className={`Navbar__primarynav--content ${genresNav ? "active" : ""}`}
						>
							{genresNav && (
								<ul
									className="Navbar__primarynav--content-wrp"
									ref={genresNavRef}
								>
									<li className="Navbar__navlinks--link">
										<NavLink to="/browse" activeClassName="activeNavLink">
											Home
										</NavLink>
									</li>
									<li className="Navbar__navlinks--link">
                    <NavLink to="/cartoons" activeClassName="activeNavLink">
                      Cartoons
                    </NavLink>
									</li>
									<li className="Navbar__navlinks--link">
                    <NavLink to="/movies" activeClassName="activeNavLink">
                      Classics
                    </NavLink>
									</li>
									<li className="Navbar__navlinks--link">
										<NavLink to="/mylist" activeClassName="activeNavLink">
											My list
										</NavLink>
									</li>
								</ul>
							)}
						</div>
					</div>
				)}
				<div className="Navbar__secondarynav">
					{/* <div className="Navbar__navitem">
						<Searchbar />
					</div> */}
					<div className="Navbar__navitem">
						<div
							className={`Navbar__navprofile ${profileNav && "active"}`}
							onClick={() => setProfileNav(!profileNav)}
						>
							<img
								className="Navbar__navprofile--avatar Navbar__navprofile--toggler"
								src={avatar}
								alt="Profile Picture"
							/>
							<FaCaretDown className="Navbar__navprofile--toggler Navbar__navprofile--caret" />
							<div className={`Navbar__navprofile--content ${profileNav ? "active" : ""}`}>
								{profileNav && (
									<ul
										className="Navbar__navprofile--content-wrp"
										ref={profileNavRef}
									>
										{currentUser && (
											<li
												className="Navbar__navlinks--link"
												onClick={() => dispatch(signOutStart())}
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
			</motion.nav>
		</>
	);
};

export default Navbar;
