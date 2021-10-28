import './signIn.scss';
import { motion } from "framer-motion";
import { authFadeInUpVariants, staggerOne } from "../../motionUtils";
import { metamaskSignInStart, walletConnectSignInStart, coinbaseSignInStart } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthLoadingState } from "../../redux/auth/auth.selectors";
import metamask from "../../assets/metamask.svg";
import walletConnect from "../../assets/walletc.svg";
import coinbaseWallet from "../../assets/coibaseWallet.webp";
import useViewport from "../../hooks/useViewport";
import nifty from "../../assets/nifty.svg"

const SignIn = () => {
  const { width } = useViewport();
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthLoadingState);

  const niftyLogin = () => {
    window.location.href = `https://niftygateway.com/authorize?scope=profile:read&client_id=${process.env.REACT_APP_NIFTY_ID}&redirect_uri=${encodeURIComponent('https://cinema.flowtys.com/callback')}&response_type=token&response_mode=fragment`; 
  }

	return (
		<motion.form
			variants={staggerOne}
			initial="initial"
			animate="animate"
			exit="exit"
			className="SignIn__form"
		>
      {width >= 1024 ? (
        <>
        <motion.button
          type="button"
          variants={authFadeInUpVariants}
          className={`SignIn__form--button button__wallet ${isLoading && 'loading'}`}
          onClick={() => dispatch(metamaskSignInStart())}
          disabled={isLoading}
        >
          <img
            alt=""
            style={{ transition: "none" }}
            src={metamask}
            className="metamask-icon"
          /> 
          MetaMask
        </motion.button>
        <motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
        </>
      ) : (<> </>)}
			<motion.button
				type="button"
				variants={authFadeInUpVariants}
				className={`SignIn__form--button button__wallet ${isLoading && 'loading'}`}
				onClick={() => dispatch(walletConnectSignInStart())}
				disabled={isLoading}
			>
				<img
          alt=""
          style={{ transition: "none" }}
          src={walletConnect}
          className="metamask-icon"
        /> 
        {width >= 1024 ? "WalletConnect" : "WalletConnect (MetaMask & others)"}
			</motion.button>
      <motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
			<motion.button
				type="button"
				variants={authFadeInUpVariants}
				className={`SignIn__form--button button__wallet ${isLoading && 'loading'}`}
				onClick={() => dispatch(coinbaseSignInStart())}
				disabled={isLoading}
			>
				<img
          alt=""
          style={{ transition: "none" }}
          src={coinbaseWallet}
          className="metamask-icon"
        /> 
        Coinbase Wallet
			</motion.button>
      <motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
			<motion.button
				type="button"
				variants={authFadeInUpVariants}
				className={`SignIn__form--button button__wallet ${isLoading && 'loading'}`}
				onClick={niftyLogin}
				disabled={isLoading}
			>
				<img
          alt=""
          style={{ transition: "none" }}
          src={nifty}
          className="metamask-icon"
        /> 
        Nifty Gateway Wallet
			</motion.button>

      
		</motion.form>
	)
}

export default SignIn;