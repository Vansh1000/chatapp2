
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJR774uFHKTvOOZxDZKqqaan1vieE2SGg",
    authDomain: "chat-app-55fc9.firebaseapp.com",
    databaseURL: "https://chat-app-55fc9.firebaseio.com",
    projectId: "chat-app-55fc9",
    storageBucket: "chat-app-55fc9.appspot.com",
    messagingSenderId: "1050448432967",
    appId: "1:1050448432967:web:15139672d500f46bf94662",
    measurementId: "G-GSSFL849QG"
  };

firebase.initializeApp(firebaseConfig);
  

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
