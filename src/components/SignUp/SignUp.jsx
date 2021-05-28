import './signUp.scss';
import InputField from "../InputField/InputField";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { authFadeInUpVariants, staggerOne } from "../../motionUtils";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../redux/auth/auth.actions";
import { selectAuthLoadingState } from "../../redux/auth/auth.selectors";

const SignUp = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectAuthLoadingState);
	const { register, handleSubmit, errors, getValues } = useForm({
		mode: "onTouched"
	})

	const onSubmit = data => {
		const { displayName, email, password } = data;
		dispatch(signUpStart({ displayName, email, password }));
	}

	return (
		<motion.form
			variants={staggerOne}
			initial="initial"
			animate="animate"
			exit="exit"
			className="SignUp__form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<motion.div variants={authFadeInUpVariants} className="SignUp__form--inputwrp">
				<InputField
					type="text"
					name="displayName"
					placeholder="Your name"
					validationMessage="Please enter your name."
					validation={register({
						required: true,
						minLength: 2,
						maxLength: 60
					})}
					errors={errors}
					disabled={isLoading}
				/>
			</motion.div>
			<motion.div variants={authFadeInUpVariants} className="SignUp__form--inputwrp">
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
			<motion.div variants={authFadeInUpVariants} className="SignUp__form--inputwrp">
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
			<motion.div variants={authFadeInUpVariants} className="SignUp__form--inputwrp">
				<InputField
					type="password"
					name="check_password"
					placeholder="Repeat your password"
					validationMessage="Passwords should match"
					validation={register({
						validate: {
							matchesPreviousPassword: (value) => {
								const { password } = getValues();
								return value && password === value || "Passwords should match!";
							}
						}
					})}
					errors={errors}
					disabled={isLoading}
				/>
			</motion.div>
			<motion.button
				type="submit"
				variants={authFadeInUpVariants}
				className={`SignUp__form--button button__submit ${isLoading && 'loading'}`}
				disabled={isLoading}
			>
				{isLoading ? <Loader /> : 'Sign Up'}
			</motion.button>
		</motion.form>
	)
}

export default SignUp;