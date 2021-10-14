import './signIn.scss';
import { motion } from "framer-motion";
import { authFadeInUpVariants, staggerOne } from "../../motionUtils";
import { metamaskSignInStart, walletConnectSignInStart, coinbaseSignInStart } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthLoadingState } from "../../redux/auth/auth.selectors";
import metamask from "../../assets/metamask.svg";
import walletConnect from "../../assets/walletc.svg";
import coinbaseWallet from "../../assets/coibaseWallet.webp";

const SignIn = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthLoadingState);

	return (
		<motion.form
			variants={staggerOne}
			initial="initial"
			animate="animate"
			exit="exit"
			className="SignIn__form"
		>
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
        WalletConnect
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
		</motion.form>
	)
}

export default SignIn;