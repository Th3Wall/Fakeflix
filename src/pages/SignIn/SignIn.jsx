import "./signIn.scss"
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js"
import { Link } from "react-router-dom"
import InputField from "../../components/InputField/InputField"

const SignIn = () => {
    return (
        <div className="SignIn">
            <div className="SignIn__opacityLayer" />
            <div
                className="SignIn__bgLayer"
                style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }}
            />
            <Link to="/" className="SignIn__logo">
                <img className="SignIn__logo--img" src={LOGO_URL} />
            </Link>
            <div className="SignIn__content">
                <h2 className="SignIn__content--title">Sign In</h2>

                <form className="SignIn__form">
                    <div className="SignIn__form--inputwrp">
                        <InputField
                            type="text"
                            placeholder="E-mail"
                            // validationMessage='Please enter a valid email address.'
                        />
                    </div>
                    <div className="SignIn__form--inputwrp">
                        <InputField
                            type="password"
                            placeholder="Password"
                            // validationMessage='The password should have a length between 4 and 60 characters.'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
