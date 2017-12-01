// this is a comment, I'm useless.
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

	if (character == "X") {
		character="o"
	}else{
		character="X"
	}

	document.getElementById(location).innerHTML = character;
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









