import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdBo_CrjZaGCk35owcy9ERkl3qFCHwnfA',
  authDomain: 'mymoney-500c3.firebaseapp.com',
  projectId: 'mymoney-500c3',
  storageBucket: 'mymoney-500c3.appspot.com',
  messagingSenderId: '380801810877',
  appId: '1:380801810877:web:82ff51e8edb49138b952d4',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
