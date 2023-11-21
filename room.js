const firebaseConfig = {
    apiKey: "AIzaSyBFF7w6ifZv1g1Ru82K2PZJfsZZIDNz1XQ",
    authDomain: "btpp-cf80e.firebaseapp.com",
    databaseURL: "https://btpp-cf80e-default-rtdb.firebaseio.com",
    projectId: "btpp-cf80e",
    storageBucket: "btpp-cf80e.appspot.com",
    messagingSenderId: "326866875475",
    appId: "1:326866875475:web:724f337331eac6f4c482a6"
  };

firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location = "index.html";
    username = " ";
}
function onload(){
  var username = localStorage.getItem("username");
  document.getElementById("username-greet").innerHTML = "Bem Vindo(a), " + username + "!";
}

function addRoom(){
    var roomname = document.getElementById("addRoomInput").value;
    firebase.database().ref("/").child(roomname).update({
      purpose: "Adding Room"
    });
    console.log(roomname);
    localStorage.setItem("roomName", roomname);
    window.location = "page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código
       console.log("faz o grrr " + roomNames);
       var roomNameThingys = "<div class = 'roomName' id = " + roomNames + " onclick = 'enterRoom(this.id)'>" + roomNames + "</div> <hr>";
       document.getElementById("output").innerHTML += roomNameThingys;
//Fim do código
});});}
getData();
//har har har har har har hahar hahar
function enterRoom(roomname){    
  console.log(roomname);
  localStorage.setItem("roomName", roomname);
  window.location = "page.html";
}