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

const TxtEmail = document.getElementById("txtEmail");
const TxtPassword = document.getElementById("TxtPassword");
const txtName=document.getElementById("txtName");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");



btnLogin.addEventListener('click', e => {

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


btnSignUp.addEventListener('click', e => {
    const name = txtName.value;
    const email = txtEmail.value;
    const pass = txtPassword.value;
    // const img =imgInput.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    addData(name);

})

function addData(userName) {

    var user = firebase.database().ref('users/' + userName + '/data/');
    function saveData(nom, prenom, tel) {
        var newData = user.push();
        newData.set(
            {
                name: nom,
                prenom: prenom,
                tel: tel,

            })
    }
    saveData(name, "issam", "98959");



}
btnLogout.addEventListener("click",e=> {
    firebase.auth().signOut();
})



firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {
        console.log("this is the email" + firebaseUser.email);
        console.log("this is the email" + firebaseUser.email);

        btnLogout.classList.remove("hide");



        //  image.classList.remove("hide");
        //  image.setAttribute("src", imag);
    }
    else {
        console.log("not logged in")
        btnLogout.classList.add("hide")
        image.classList.add("hide");
    }
})
$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
    $("#second").fadeIn("fast");
    });
    });
    
    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
    
    
      
             $(function() {
               $("form[name='login']").validate({
                 rules: {
                   
                   email: {
                     required: true,
                     email: true
                   },
                   password: {
                     required: true,
                     
                   }
                 },
                  messages: {
                   email: "Please enter a valid email address",
                  
                   password: {
                     required: "Please enter password",
                    
                   }
                   
                 },
                 submitHandler: function(form) {
                   form.submit();
                 }
               });
             });
             
    
    
    $(function() {
      
      $("form[name='registration']").validate({
        rules: {
          firstname: "required",
          lastname: "required",
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        
        messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
          },
          email: "Please enter a valid email address"
        },
      
        submitHandler: function(form) {
          form.submit();
        }
      });
    });
    
