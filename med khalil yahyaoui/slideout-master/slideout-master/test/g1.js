// Initialize Firebase
var config = {
    apiKey: "AIzaSyABsC9SdzfbrJ4HNtRuWJ7vKYeS84X-v7M",
    authDomain: "myproject-cdc78.firebaseapp.com",
    databaseURL: "https://myproject-cdc78.firebaseio.com",
    projectId: "myproject-cdc78",
    storageBucket: "myproject-cdc78.appspot.com",
    messagingSenderId: "382821997063"
  };
  firebase.initializeApp(config);
  const txtEmail = document.getElementById("email");
  const txtPassword = document.getElementById("pwd");
  const txtFirstName=document.getElementById("nom");
  const txtLastName=document.getElementById("last");
  const btnSignUp = document.getElementById("btnsend");
  
  btnSignUp.addEventListener('click', e => {
    const name = txtFirstName.value;
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const last = txtLastName.value;
    // const img =imgInput.value;
    const auth = firebase.auth();
  
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    addData(name,last);
  
  })
  
  function addData(userName,last) {
  
    var user = firebase.database().ref('users/' + userName + '/data/');
    function saveData(userName, last) {
        var newData = user.push();
        newData.set(
            {
                name: userName,
                prenom: last,
              
  
            })
    }
    saveData(userName,last);
  
  
  
  }