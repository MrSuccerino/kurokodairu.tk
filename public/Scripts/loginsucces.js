window.onload = function() {

function signOut() {
  firebase.auth().signOut();
  window.location.assign('/');
}

  document.getElementById('sign-out').addEventListener('click', signOut, false);


function initialize() {


// CARD 1
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var uid = user.uid;
    var email = user.email;

    document.getElementById('details').textContent = "UID: " + uid + "\r\n" + "EMAIL: " + email + "\r\n" + "NAME: " + user.displayName;
    document.getElementById('title').textContent = "Welcome" + "\r\n" + email;

  } else {
    document.getElementById('details').textContent = 'null';
    window.location.assign('/');
  }
  });
}

// CARD 2
function Timer() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();

  document.getElementById('timer').textContent = hours+":"+mins+":"+secs;
  console.log("added a second");
}
setInterval(Timer,1000)

  initialize();


// CARD 3
// Where dice is an object
  var dice = {
    roll: function (sides) {
      var randomNumber = Math.floor(Math.random() * sides) + 1;
      return randomNumber;
    }
  }

  var button = document.getElementById('roll-btn');
  button.onclick = function() {
    var result = dice.roll(document.getElementById('number').value);
    showNumber(result);
  };

  function showNumber(number) {
  var placeholder = document.getElementById('dice-result');
  placeholder.innerHTML = number;
}
}

// CARD 4
var dbC = document.getElementById('databaseContent');
var abc = "Hello";

//check database and replace loop
function dbLoop() {

dbC.innerHTML = "abc";
}
setInterval(dbLoop,10000)
