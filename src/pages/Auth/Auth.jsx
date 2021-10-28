import "./auth.scss";
import SignIn from "../../components/SignIn/SignIn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerOne, authFadeInUpVariants, modalVariants, authPageFadeInVariants } from "../../motionUtils";
import { useSelector } from "react-redux";
import { selectAuthErrors } from "../../redux/auth/auth.selectors";
import flowtys from "../../assets/flowtys.webp";
import { useEffect } from "react";
import { niftyConnectSignInStart } from "../../redux/auth/auth.actions";
import { useDispatch, } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
	const authError = useSelector(selectAuthErrors);
  const fragment = new URLSearchParams(window.location.hash.slice(1));
  const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

  useEffect(() => {
		if (accessToken && tokenType) {
      dispatch(niftyConnectSignInStart({ accessToken, tokenType }));
    }
	}, [accessToken, tokenType, dispatch])

	return (
		<motion.div
			className="Auth"
			variants={authPageFadeInVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
      <div className="Auth__opacityLayer" />
			<div className="Auth__bgLayer"/>
      <motion.div className="Auth__topBox" initial="hidden" animate="animate" exit="exit">
        <Link to="/" className="Auth__logo">
          <img className="Auth__logo" src={flowtys} alt="" />
        </Link>
        <div className="Auth__topAboutBox">
          <motion.h2 className="Auth__topAbout">
            A free streaming service for owners of a Non-fungible Token created by Flowty.
					</motion.h2>
        </div>
					
      </motion.div>
			<motion.div
				className="Auth__content"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
					<motion.h2 variants={authFadeInUpVariants} className="Auth__content--title">
						Connect your Wallet
					</motion.h2>
					{/* <motion.small variants={authFadeInUpVariants} className="Auth__content--disclaimer">
						{`Pay attention: this is not the original Netflix ${isSignedUp ? "sign in" : "sign up"}. Don't insert your real credentials here!`}
					</motion.small> */}
					<SignIn />
					{authError && <motion.p variants={authFadeInUpVariants} className='Auth__content--errors'>{authError}</motion.p>}
					<motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Auth;
