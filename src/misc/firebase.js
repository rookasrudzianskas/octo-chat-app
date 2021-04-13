import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxbNSunu5PHrv1rNlgMjDNGXm94lGEzyw",
    authDomain: "octo-chat-app.firebaseapp.com",
    projectId: "octo-chat-app",
    storageBucket: "octo-chat-app.appspot.com",
    messagingSenderId: "586485662100",
    appId: "1:586485662100:web:142ff93eb643ab64220f81"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
