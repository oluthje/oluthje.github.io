var output;

function CreateDebt(){
 var Date1 = date();
 alert(Date1);
 var First_Name = document.getElementById("First_Name");
 var Last_Name = document.getElementById("Last_Name");
 var Endebted1 = document.getElementById("Endebted1");
 var Endebted2 = document.getElementById("Endebted2");
 var Debt_Amount = document.getElementById("Debt_Amount");
 var Interest_Rate = document.getElementById("Interest_Rate");
 var Interest_Period = document.getElementById("Interest_Period");
}

function date(){
	var d = new Date();

	return(d.getYear()*365 + d.getDate());

}