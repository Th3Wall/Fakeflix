import "./auth.scss";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { defaultEasing, staggerOne } from "../../motionUtils";
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js";
import { useSelector } from "react-redux";
import { selectAuthErrors } from "../../redux/auth/auth.selectors";

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(true);
	const authError = useSelector(selectAuthErrors);

	const modalVariants = {
		hidden: { opacity: 0, top: "100%", transition: { type: "spring", stiffness: 210, damping: 25 } },
		visible: { opacity: 1, top: "50%", transition: { type: "spring", stiffness: 210, damping: 30 }}
	}
	const fadeIn = {
		initial: { opacity: 0, transition: { duration: .6, ease: defaultEasing }},
		animate: { opacity: 1, transition: { duration: .6, ease: defaultEasing }},
		exit: { opacity: 0, transition: { duration: .6, ease: defaultEasing }}
	};
	const fadeInUp = {
		initial: { y: 30, opacity: 0, transition: { duration: .8, ease: defaultEasing }},
		animate: { y: 0, opacity: 1, transition: { duration: .8, ease: defaultEasing }}
	};

	return (
		<motion.div
			className="Auth"
			variants={fadeIn}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="Auth__opacityLayer" />
			<div className="Auth__bgLayer" style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }} />
			<Link to="/" className="Auth__logo">
				<img className="Auth__logo--img" src={LOGO_URL} alt="Fakeflix_logo" />
			</Link>
			<motion.div
				className="Auth__content"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
					<motion.h2 variants={fadeInUp} className="Auth__content--title">
						{isSignedUp ? "Sign In" : "Sign Up"}
					</motion.h2>
					{isSignedUp ? <SignIn /> : <SignUp />}
					{authError && <motion.p variants={fadeInUp} className='Auth__content--errors'>{authError}</motion.p>}
					<motion.hr variants={fadeInUp} className="Auth__content--divider" />
					<motion.small variants={fadeInUp} className="Auth__content--toggleView">
						{isSignedUp
							? `Haven't you registered yet? `
							: "Do you already have an account? "}
						<span className="toggler" onClick={() => setIsSignedUp(!isSignedUp)}>
							{isSignedUp ? "Sign Up" : "Sign In"}
						</span>
					</motion.small>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Auth;
