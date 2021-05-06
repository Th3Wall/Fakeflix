import { takeLatest, all, put, call } from "redux-saga/effects";
import { userActionTypes } from "./user.types";
import { auth, createUserProfileDocument, googleProvider } from "../../firebase/firebaseUtils";
import { signInFailure, signInSuccess } from "./user.actions";

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signInWithEmail({payload: { email, password }}) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* onGoogleSignInStart(){
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
	yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
	]);
}