
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhi_VQg4pYMGSzYb25jbkCv5TJr3v5xVA",
    authDomain: "visual-studio-sync-35cb4.firebaseapp.com",
    databaseURL: "https://visual-studio-sync-35cb4.firebaseio.com",
    projectId: "visual-studio-sync-35cb4",
    storageBucket: "visual-studio-sync-35cb4.appspot.com",
    messagingSenderId: "40478643582"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

export {
  auth,
};
