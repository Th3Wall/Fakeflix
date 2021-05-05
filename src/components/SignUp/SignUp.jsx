import './signUp.scss';
import InputField from "../InputField/InputField";
import { auth } from "../../firebase/firebaseUtils";
import { useForm } from "react-hook-form";

const SignUp = () => {

	const { register, handleSubmit, errors, getValues } = useForm({
		mode: "onTouched"
	})

	const onSubmit = data => {
		const { email, password } = data;
		auth.createUserWithEmailAndPassword(email, password)
			.then(authUser =>{
				console.log(authUser)
				// Set authUser to store
			})
			.catch((error)=> console.log(error.message))
	}

	return (
		<form className="SignUp__form" onSubmit={handleSubmit(onSubmit)}>
			<div className="SignUp__form--inputwrp">
				<InputField
					type="text"
					name="name"
					placeholder="Your name"
					validationMessage="Please enter your name."
					validation={register({
						required: true,
						minLength: 2,
						maxLength: 60
					})}
					errors={errors}
				/>
			</div>
			<div className="SignUp__form--inputwrp">
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
				/>
			</div>
			<div className="SignUp__form--inputwrp">
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
			<div className="SignUp__form--inputwrp">
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
				/>
			</div>
			<button
				type="submit"
				className="SignUp__form--button button__submit"
			>
				Sign Up
			</button>
		</form>
	)
}

export default SignUp;