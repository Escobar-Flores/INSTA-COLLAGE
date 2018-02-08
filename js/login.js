$(document).ready(function() {
  // Initialize Firebase
  let config = {
    apiKey: 'AIzaSyDL4uPrhJD34uMRxjKa2m1BhpVmo8WpkXo',
    authDomain: 'insta-collage-9eb48.firebaseapp.com',
    databaseURL: 'https://insta-collage-9eb48.firebaseio.com',
    projectId: 'insta-collage-9eb48',
    storageBucket: '',
    messagingSenderId: '555417970023'
  };
  firebase.initializeApp(config);  

  let signUp = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };

  let btnSignUp = document.getElementById('btnSignUp');
  btnSignUp.addEventListener('click', signUp);

  let login = () => {
    let email2 = document.getElementById('email2').value;
    let password2 = document.getElementById('password2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
      .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
  };

  let btnLogin = document.getElementById('btnLogin');
  btnLogin.addEventListener('click', login);

  let observer = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Existe usuario');
        window.location.href = 'views/home/index.html';
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        console.log('No existe usuario');
        // ...
      }
    });
  };
  observer();
});