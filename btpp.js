
function login(){

    var username = document.getElementById("username").value;

    localStorage.addItem("username", username);

    window.location="room.html";
    
}