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
//ADD YOUR FIREBASE LINKS HERE
var user$name= localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "Welcome "+ user$name + " !"
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log(Room_names);
            row="<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML+=row;
            //End code
      });});}
getData();
function addRoom() {
roomname= document.getElementById("room_add").value;
firebase.database().ref("/").child(roomname).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",roomname);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}