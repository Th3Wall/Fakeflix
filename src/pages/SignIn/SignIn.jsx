import './signIn.scss'
import { SIGNIN_BGIMG_URL } from '../../requests.js';

const SignIn = () => {
    return (
        <div className='SignIn' style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }}>
            <div className="SignIn__opacityLayer" />
        </div>
    )
}

export default SignIn
