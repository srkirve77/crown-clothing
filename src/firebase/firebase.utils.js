import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDGk2TLKhva0l5RJZ4D567Z9_bljxnELA",
    authDomain: "crwn-db-2ab77.firebaseapp.com",
    databaseURL: "https://crwn-db-2ab77.firebaseio.com",
    projectId: "crwn-db-2ab77",
    storageBucket: "crwn-db-2ab77.appspot.com",
    messagingSenderId: "466838982158",
    appId: "1:466838982158:web:2c2e6e483d459498ac765f",
    measurementId: "G-QEMV0NGRLE"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error) {
                console.log('error creating user',error.message );
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

