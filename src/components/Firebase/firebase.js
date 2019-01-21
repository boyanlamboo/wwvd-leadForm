import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBMintZC9Pazgadcwzab7p-RdMQtLWYqU0",
    authDomain: "lead-form.firebaseapp.com",
    databaseURL: "https://lead-form-1e958.firebaseio.com",
    projectId: "lead-form-1e958",
    storageBucket: "lead-form.appspot.com",
};

app.initializeApp(config);

const databaseRef = app.database().ref();
export const leadsRef = databaseRef.child("leads");

class Firebase {
    constructor() {
        this.auth = app.auth();
        this.db = app.database();
    }

    // Everything for Auth
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;