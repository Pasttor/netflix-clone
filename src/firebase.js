import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBwnr5RrKwJ_FwNvha0jS6foWQRyNzYMaU',
	authDomain: 'netflix-clone-d406c.firebaseapp.com',
	projectId: 'netflix-clone-d406c',
	storageBucket: 'netflix-clone-d406c.appspot.com',
	messagingSenderId: '451396716807',
	appId: '1:451396716807:web:77393278a9b880ddff9da2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
