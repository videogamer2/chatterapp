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

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location = "index.html";
    username = " ";
}

var username = localStorage.getItem("username");
var roomname = localStorage.getItem("roomName")

function send(){
  var message = document.getElementById("message").value;
  firebase.database().ref(roomname).push({
    name: username,
    message: message,
    likes: 0
  })
  document.getElementById("message").value = " ";
}