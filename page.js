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
var roomname = localStorage.getItem("roomName");

function send(){
  var message = document.getElementById("message").value;
  firebase.database().ref(roomname).push({
    name: username,
    message: message,
    likes: 0
  })
  document.getElementById("message").value = " ";
}
//
//
console.log(roomname);
function getData() {firebase.database().ref("/"+roomname).on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
var childData = childSnapshot.val();
if(childKey!="purpose"){
  var messageID = childKey;
  var messageDATA =  childData;
  var messageSENDER = messageDATA["name"];
  var messageTEXT = messageDATA["message"];
  var messageLIKES = messageDATA["likes"];
  var username2 = "<h4>"+messageSENDER+"</h4>";
  var messageh4mfwtfw = "<h4>"+messageTEXT+"</h4>";
  var likebutton = "<button id="+messageID+" value="+messageLIKES+" onclick='updateLike(this.id)' >";
  var likenumber = "<span> likeS:"+messageLIKES+" </span> </button> <br> <hr> <h1>mensagem abaixo!!!!!! cuidado :)  >:) </h1>";
  var roomNameThingys = username2+messageh4mfwtfw+likebutton+likenumber;
  document.getElementById("output").innerHTML += roomNameThingys;
}
});});}
getData();

function updateLike(messageID){
  var likeZ = document.getElementById(messageID).value;
  var likeZPLUSZ = Number(likeZ)+1;
  firebase.database().ref(roomname).child(messageID).update({
    likes: likeZPLUSZ
  });
}