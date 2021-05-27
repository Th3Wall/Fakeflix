import './signIn.scss';
import InputField from "../InputField/InputField";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { defaultEasing, staggerOne } from "../../motionUtils";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { emailSignInStart, googleSignInStart } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthLoadingState } from "../../redux/auth/auth.selectors";

const SignIn = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthLoadingState);
	const { register, handleSubmit, errors } = useForm({
		mode: "onTouched"
	})

	const onSubmit = data => {
		const { email, password } = data;
		dispatch(emailSignInStart({ email, password }));
	}

	const fadeInUp = {
		initial: { y: 30, opacity: 0, transition: { duration: .8, ease: defaultEasing }},
		animate: { y: 0, opacity: 1, transition: { duration: .8, ease: defaultEasing }}
	};

	return (
		<motion.form
			variants={staggerOne}
			initial="initial"
			animate="animate"
			exit="exit"
			className="SignIn__form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<motion.div variants={fadeInUp} className="SignIn__form--inputwrp">
				<InputField
					type="text"
					name="email"
					placeholder="E-mail"
					validationMessage="Please enter a valid email address."
					validation={register({
						required: true,
						pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
					})}
					errors={errors}
					disabled={isLoading}
				/>
			</motion.div>
			<motion.div variants={fadeInUp} className="SignIn__form--inputwrp">
				<InputField
					type="password"
					name="password"
					placeholder="Password"
					validationMessage="The password should have a length between 6 and 30 characters."
					validation={register({
						required: true,
						minLength: 6,
						maxLength: 30,
					})}
					errors={errors}
					disabled={isLoading}
				/>
			</motion.div>
			<motion.button
				type="submit"
				variants={fadeInUp}
				className={`SignIn__form--button button__submit ${isLoading && 'loading'}`}
				disabled={isLoading}
			>
				{isLoading ? <Loader /> : 'Sign in'}
			</motion.button>
			<motion.button
				type="button"
				variants={fadeInUp}
				className={`SignIn__form--button button__google ${isLoading && 'loading'}`}
				onClick={() => dispatch(googleSignInStart())}
				disabled={isLoading}
			>
				{!isLoading && <FcGoogle />}
				{isLoading ? <Loader /> : 'Sign in with Google'}
			</motion.button>
		</motion.form>
	)
}

export default SignIn;