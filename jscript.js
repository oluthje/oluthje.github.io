function shake8ball() {
	//change image on click.
//	document.getElementById("magic8ball").src="magic8ball2.jpg";
	
	//changes 8 ball text.
	document.getElementById("results").innerHTML=list[randNumber()];
}

var list = ["It is so",
			"We shall see",
			"Yes",
			"Ask again",
			"Signs point to yes",
			"No",
			"Try again later",
			"Doubtful",
			"Certainly",
			"Its likely"];

//random number for eightball message generation
function randNumber () {
	return Math.floor(Math.random() * 10);
}





//Below is the code for Tic Tac Toe

//holds x or o
var character = "X";

//Handles X and O turns for Tic Tac Toe
function turn(location) {

	//if no x or o, then draw

	if(document.getElementById(location).innerHTML == ""){

		if (character == "X") {
			character="o"
		}else{
			character="X"
		}

		document.getElementById(location).innerHTML = character;

	}
	checkWinner()
}

//clears tic tac toe board
function clearAll() {
	document.getElementById("r1c1").innerHTML = "";
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
	document.getElementById("r3c3").innerHTML = "";
}

function checkWinner() {

	var r1c1 = document.getElementById("r1c1").innerHTML;
	var	r1c2 = document.getElementById("r1c2").innerHTML;
	var	r1c3 = document.getElementById("r1c3").innerHTML;
	var	r2c1 = document.getElementById("r2c1").innerHTML;
	var	r2c2 = document.getElementById("r2c2").innerHTML;
	var	r2c3 = document.getElementById("r2c3").innerHTML;
	var	r3c1 = document.getElementById("r3c1").innerHTML;
	var	r3c2 = document.getElementById("r3c2").innerHTML;
	var	r3c3 = document.getElementById("r3c3").innerHTML;

	if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 != "" ||
	 r2c1 == r2c2 && r2c1 == r2c3 && r2c1 != "" || 
	 r3c1 == r3c2 && r3c1 == r3c3 && r3c1 != "" || 
	 r1c1 == r2c1 && r1c1 == r3c1 && r1c1 != "" ) {

		alert("Winner!");
	}

}

//flashcards thingy


//Generate random number for flashcards number guessing/flashcards
var randomNumberBetween0and19a = Math.floor(Math.random() * 20);
var randomNumberBetween0and19b = Math.floor(Math.random() * 20);
//Above it generates two random numbers between 0 and 19 for two text boxes.



function randomWholeNum() {
  document.getElementById("boxa").value = a;
  document.getElementById("boxb").value = b;

  var a = randomNumberBetween0and19a;
  var b = randomNumberBetween0and19b;

}

var answer = document.getElementById("boxc");
var addedNums = a+b;

function checkAnswer() {

	if addedNums == answer {
		alert("Your answer is correct! Yay! I really don't care tho");
	}else{
		alert("You screwed up and got the answer wrong!")
	}
}



/*
//The below function is not relevent and is just here for looks.
function addValues() {
	var a = parseInt(document.getElementById("boxa").value);
	var b = parseInt(document.getElementById("boxb").value);
Sent up
	var c = a+b;
	document.getElementById("boxc").value = c;
}
*/

















