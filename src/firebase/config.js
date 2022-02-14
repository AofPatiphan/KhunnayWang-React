import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyCv7R-e7BoFyOvePqfz6aLfzr8eKxOwBYk',
    authDomain: 'khunnaywang-7ee93.firebaseapp.com',
    databaseURL: 'https://khunnaywang-7ee93.firebaseio.com',
    projectId: 'khunnaywang-7ee93',
    storageBucket: 'khunnaywang-7ee93.appspot.com',
    messagingSenderId: '106591818587',
    appId: '1:106591818587:ios:5e6eeb13ee7d037ae3c07e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
