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
    window.location = "index.html";
    username = " ";
}
function onload(){
    document.getElementById("username-greet").innerHTML = "Bem Vindo(a), " + username + "!";
}