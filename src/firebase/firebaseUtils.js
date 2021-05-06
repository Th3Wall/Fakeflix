import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Firebase Configuration Object
const firebaseConfig = {
    apiKey: "AIzaSyCyLFoPkZEGUM5Jbo2HKQgMxjfBN26MpAI",
    authDomain: "fakeflix-c0203.firebaseapp.com",
    projectId: "fakeflix-c0203",
    storageBucket: "fakeflix-c0203.appspot.com",
    messagingSenderId: "589912771675",
    appId: "1:589912771675:web:9fb1e0684f7bf68103837e",
    measurementId: "G-DSYVJQ0MWN",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }

    return userRef
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

// Firebase web app init
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in With Google Setup with popup
export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
