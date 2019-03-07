let cases = {
c1:{name:1,value:0},
c2:{name:2,value:0},
c3:{name:3,value:2},
c4:{name:4,value:0},
c5:{name:5,value:0},
c6:{name:6,value:0}
}

function randomize(){ // Chooses random numbers and puts them on the buttons
  cases.c1.value = 0;
  cases.c2.value = 0;
  cases.c3.value = 0;
  cases.c4.value = 0;
  cases.c5.value = 0;
  cases.c6.value = 0;

  var num = Math.floor(Math.random() * 6);
  var num2;
  function setNum2() { num2 = Math.floor(Math.random() * 6); checkNums(); }
  function checkNums() { if(num === num2) return setNum2();}

  if(num === 0) {
    cases.c1.value = "2x";
  }else if(num === 1){
    cases.c2.value = "2x";
  }else if(num === 2){
    cases.c3.value = "2x";
  }else if(num === 3){
    cases.c4.value = "2x";
  }else if(num === 4){
    cases.c5.value = "2x";
  }else{
    cases.c6.value = "2x";
  }

  setNum2();

  if(num2 === 0) {
    cases.c1.value = "2x";
  }else if(num2 === 1){
    cases.c2.value = "2x";
  }else if(num2 === 2){
    cases.c3.value = "2x";
  }else if(num2 === 3){
    cases.c4.value = "2x";
  }else if(num2 === 4){
    cases.c5.value = "2x";
  }else{
    cases.c6.value = "2x";
  }
}

function showWin(box) { // Shows text with winnings or loss
  var bet = Math.floor(document.getElementById("textInput").value * 2);
  var text = document.getElementById("winText");

  if(box === "2x") {
    text.innerHTML = "Gratulerer du vant: " + bet;
  } else {
    text.innerHTML = "Du tapte: " + bet / 2;
}
}


function case1() { // Case 1's task
  var elem = document.getElementById("c1");
    elem.innerHTML = cases.c1.value;
  var box = cases.c1.value;
  showWin(box);
}
function case2() {// Case 2's task
  var elem = document.getElementById("c2");
    elem.innerHTML = cases.c2.value;
  var box = cases.c2.value;
  showWin(box);
}
function case3() {// Case 3's task
  var elem = document.getElementById("c3");
    elem.innerHTML = cases.c3.value;
  var box = cases.c3.value;
  showWin(box);
}
function case4() {// Case 4's task
  var elem = document.getElementById("c4");
    elem.innerHTML = cases.c4.value;
  var box = cases.c4.value;
  showWin(box);
}
function case5() {// Case 5's task
  var elem = document.getElementById("c5");
    elem.innerHTML = cases.c5.value;
  var box = cases.c5.value;
  showWin(box);
}
function case6() {// Case 6's task
  var elem = document.getElementById("c6");
    elem.innerHTML = cases.c6.value;
  var box = cases.c6.value;
  showWin(box);
}

function reload() { // Reloads all the variables
  document.getElementById("c1").innerHTML = "CASE 1";
  document.getElementById("c2").innerHTML = "CASE 2";
  document.getElementById("c3").innerHTML = "CASE 3";
  document.getElementById("c4").innerHTML = "CASE 4";
  document.getElementById("c5").innerHTML = "CASE 5";
  document.getElementById("c6").innerHTML = "CASE 6";
  document.getElementById("winText").innerHTML = '';

  randomize();
}

randomize(); // colors on background
var colors = ["red","yellow","orange"];
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + colors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= colors.length) {
		currentIndex = 0;
	}
}, 1000);

