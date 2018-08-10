 document.getElementById('form1').addEventListener('submit', submitForm);
 var config = {
    apiKey: "AIzaSyDTjw5rJpZV0Kqr1MP6my53Gey_PZtAHK8",
    authDomain: "khalilgmc-7c3ae.firebaseapp.com",
    databaseURL: "https://khalilgmc-7c3ae.firebaseio.com",
    projectId: "khalilgmc-7c3ae",
    storageBucket: "khalilgmc-7c3ae.appspot.com",
    messagingSenderId: "595428580268"
  };
  firebase.initializeApp(config);

function getInputVal(id)
{
return document.getElementById(id).value;
} 


   function submitForm()
   {

    var nom = getInputVal('nom');
    var email = getInputVal('email');
    var tel = getInputVal('tel');
    var txt= getInputVal('txt');
   console.log("dfbvdfkvb");
     saveMessage(nom, email, tel, txt);
 

setTimeout(function(){
  document.querySelector('.alert').style.display = 'block';
},3000);


}

function resetForm(){
document.getElementById('form1').reset();
	
}




var messagesRef = firebase.database().ref('messages');


function saveMessage(nom, email, tel, txt){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nom:nom,
    email:email,
    tel:tel,
   txt:txt
});
}


var ref =firebase.database().ref("messages");
ref.once("value")
  .then(function(snapshot){

var tableau =snapshot.val()
console.log(tableau);
for (var element in tableau)
{
 e=tableau[element]
 $("#a").append("<h3>"+e+"</h3>")
}
 });


