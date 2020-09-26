import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCRP6XU9pXNGIQzabd1VH0kdztwxxMb3Ww",
    authDomain: "react-store-f85a0.firebaseapp.com",
    databaseURL: "https://react-store-f85a0.firebaseio.com",
    projectId: "react-store-f85a0",
    storageBucket: "react-store-f85a0.appspot.com",
    messagingSenderId: "126834427342",
    appId: "1:126834427342:web:7f5c1d4e850d02de12979f"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}