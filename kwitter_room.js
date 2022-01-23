
var firebaseConfig = {
      apiKey: "AIzaSyCuFOm7c9ohCI81eNww2NIzLGX3rymevfw",
      authDomain: "kwitter-8dc0f.firebaseapp.com",
      databaseURL: "https://kwitter-8dc0f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8dc0f",
      storageBucket: "kwitter-8dc0f.appspot.com",
      messagingSenderId: "649309023666",
      appId: "1:649309023666:web:b47f4c059c9da5232d08ab"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"   
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names +  "</div> <hr>";
      document.getElementById("output").innerHTML += row;

});});}

getData();

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}
