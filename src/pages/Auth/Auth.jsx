import "./auth.scss"
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js"
import { Link } from "react-router-dom"
// import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Auth = () => {
    return (
        <div className="Auth">
            <div className="Auth__opacityLayer" />
            <div className="Auth__bgLayer" style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }} />
            <Link to="/" className="Auth__logo">
                <img className="Auth__logo--img" src={LOGO_URL} />
            </Link>
            {/*<SignIn />*/}
            <SignUp />
        </div>
    )
}

export default Auth
