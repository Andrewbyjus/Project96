addRoom()
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

user_name
room_names


firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
