$(document).ready(function(){
  console.log('ready')
$('#myModal').modal()
})

var config = {
  apiKey: "AIzaSyABsC9SdzfbrJ4HNtRuWJ7vKYeS84X-v7M",
  authDomain: "myproject-cdc78.firebaseapp.com",
  databaseURL: "https://myproject-cdc78.firebaseio.com",
  projectId: "myproject-cdc78",
  storageBucket: "myproject-cdc78.appspot.com",
  messagingSenderId: "382821997063"
};
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("pass");
const login = document.getElementById("conect");
firebase.initializeApp(config);
login.addEventListener('click', e => {

  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.then((data) => {
      console.log('this is data', data)


  })
  promise.catch(e => console.log(e.message));
  // var User = firebase.auth().currentUser;




})