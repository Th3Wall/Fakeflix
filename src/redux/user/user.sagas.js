import { takeLatest, all, put, call } from "redux-saga/effects";
import { userActionTypes } from "./user.types";
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebaseUtils";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess } from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
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

export function* onCheckUserSession(){
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkIfUserIsAuthenticated);
}

export function* onGoogleSignInStart(){
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
	yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart(){
	yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignOutStart)
	]);
}