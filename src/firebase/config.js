import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
// const firebaseConfig = {
//     apiKey: 'AIzaSyCv7R-e7BoFyOvePqfz6aLfzr8eKxOwBYk',
//     authDomain: 'khunnaywang-7ee93.firebaseapp.com',
//     databaseURL: 'https://khunnaywang-7ee93.firebaseio.com',
//     projectId: 'khunnaywang-7ee93',
//     storageBucket: 'khunnaywang-7ee93.appspot.com',
//     messagingSenderId: '106591818587',
//     appId: '1:106591818587:web:5e6eeb13ee7d037ae3c07e',
// };
const firebaseConfig = {
    apiKey: 'AIzaSyDA7x2ZD73ZWFlHwYdDDDTWKuFsY1ucj48',
    authDomain: 'khunnaywang-e24f1.firebaseapp.com',
    databaseURL: 'https://khunnaywang-e24f1.firebaseio.com',
    projectId: 'khunnaywang-e24f1',
    storageBucket: 'khunnaywang-e24f1.appspot.com',
    messagingSenderId: '1082350484836',
    appId: '1:1082350484836:web:bb9e29033ed261c3428e71',
    measurementId: 'G-EKRGPJ7ZQH',
};

// if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
// }

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
