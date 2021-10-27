const firebaseConfig = {
      apiKey: "AIzaSyDYEwsezgx7HPD2yVS-ASXswvr8836igWU",
      authDomain: "kwitter-2993b.firebaseapp.com",
      databaseURL: "https://kwitter-2993b-default-rtdb.firebaseio.com",
      projectId: "kwitter-2993b",
      storageBucket: "kwitter-2993b.appspot.com",
      messagingSenderId: "527820746855",
      appId: "1:527820746855:web:526cd26a266c85e8d164c2"
    };
    firebase.initializeApp(firebaseConfig);

var Username=localStorage.getItem("username");
var Roomname=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
