import "./auth.scss";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { Link } from "react-router-dom";
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js";
import { useSelector } from "react-redux";
import { selectAuthErrors } from "../../redux/auth/auth.selectors";

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(true);
	const authError = useSelector(selectAuthErrors);

	return (
		<div className="Auth">
			<div className="Auth__opacityLayer" />
			<div className="Auth__bgLayer" style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }} />
			<Link to="/" className="Auth__logo">
				<img className="Auth__logo--img" src={LOGO_URL} alt="Fakeflix_logo" />
			</Link>
			<div className="Auth__content">
				<h2 className="Auth__content--title">
					{isSignedUp ? "Sign In" : "Sign Up"}
				</h2>
				{isSignedUp ? <SignIn /> : <SignUp />}
				{authError && <p className='Auth__content--errors'>{authError}</p>}
				<hr className="Auth__content--divider" />
				<small className="Auth__content--toggleView">
					{isSignedUp
						? `Haven't you registered yet? `
						: "Do you already have an account? "}
					<span className="toggler" onClick={() => setIsSignedUp(!isSignedUp)}>
						{isSignedUp ? "Sign Up" : "Sign In"}
					</span>
				</small>
			</div>
		</div>
	);
};

export default Auth;
