import './signIn.scss';
import InputField from "../InputField/InputField";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtils";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const SignIn = () => {

	const { register, handleSubmit, errors } = useForm({
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
							pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
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
					onClick={signInWithGoogle}
				>
					<FcGoogle />
					Sign in with Google
				</button>
			</form>
		</div>
	)
}

export default SignIn;