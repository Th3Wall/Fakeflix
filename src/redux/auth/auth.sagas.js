import { takeLatest, all, put, call } from "redux-saga/effects";
import { authActionTypes } from "./auth.types";
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebaseUtils";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./auth.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signInWithEmail({payload: { email, password }}) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* checkIfUserIsAuthenticated(){
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signOut(){
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (e) {
		yield put(signOutFailure(e.message));
	}
}

export function* signUp({payload: { displayName, email, password }}){
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }))
	} catch (e) {
		yield put(signUpFailure(e.message));
	}
}

export function* signInAfterSignUp({payload: { user, additionalData }}){
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onCheckUserSession(){
	yield takeLatest(authActionTypes.CHECK_USER_SESSION, checkIfUserIsAuthenticated);
}

export function* onGoogleSignInStart(){
	yield takeLatest(authActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
	yield takeLatest(authActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart(){
	yield takeLatest(authActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart(){
	yield takeLatest(authActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(){
	yield takeLatest(authActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* authSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	]);
}