import './signIn.scss'
import { LOGO_URL, SIGNIN_BGIMG_URL } from '../../requests.js';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='SignIn'>
            <div className="SignIn__opacityLayer" />
            <div
                className="SignIn__bgLayer"
                style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }}
            />
            <Link to='/' className='SignIn__logo'>
                <img className="SignIn__logo--img" src={LOGO_URL} />
            </Link>
            <div className="SignIn__content">
                <h2 className="SignIn__content--title">Sign In</h2>
            </div>
        </div>
    )
}

export default SignIn
