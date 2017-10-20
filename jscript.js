function testJS() {
	alert("test!");
}

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

function randNumber () {
	return Math.floor(Math.random() * 10);
}