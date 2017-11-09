
import * as firebase from 'firebase';

export default class Firebase {

  // Initializes Firebase
  static initialize() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLzOJVO7jmxQWaAurfqi_T8JQzgpjE8bU",
      authDomain: "personal-website-1bfd7.firebaseapp.com",
      databaseURL: "https://personal-website-1bfd7.firebaseio.com",
      projectId: "personal-website-1bfd7",
      storageBucket: "personal-website-1bfd7.appspot.com",
      messagingSenderId: "157564828418"
    });
  }
}