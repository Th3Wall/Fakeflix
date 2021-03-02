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

// Firebase web app init
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

// Sign in With Google Setup with popup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase
