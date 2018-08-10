
AOS.init();
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
const con = document.getElementById("con");
const sign = document.getElementById("signe");
const logout = document.getElementById("logout");
logout.addEventListener("click",e=> {
  firebase.auth().signOut();
})


firebase.auth().onAuthStateChanged(firebaseUser => {

  if (firebaseUser) {
      console.log("this is the email" + firebaseUser.email);

      
      con.classList.add("hide");
      sign.classList.add("hide");

      logout.classList.remove("hide");



      //  image.classList.remove("hide");
      //  image.setAttribute("src", imag);
  }
  else {
      console.log("not logged in")
      logout.classList.add("hide");
      con.classList.remove("hide");
      sign.classList.remove("hide");

  }
})








