import "./signIn.scss"
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import InputField from "../../components/InputField/InputField"
import { FcGoogle } from "react-icons/fc"

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

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

                <form className="SignIn__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="SignIn__form--inputwrp">
                        <InputField
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            validationMessage="Please enter a valid email address."
                            validation={register({
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            })}
                            errors={errors}
                        />
                    </div>
                    <div className="SignIn__form--inputwrp">
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Password"
                            validationMessage="The password should have a length between 4 and 60 characters."
                            validation={register({
                                required: true,
                                minLength: 4,
                                maxLength: 60,
                            })}
                            errors={errors}
                        />
                    </div>
                    <button
                        type="submit"
                        className="SignIn__form--button button__submit"
                    >
                        Sign in
                    </button>
                    <button
                        type="button"
                        className="SignIn__form--button button__google"
                    >
                        <FcGoogle />
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
