

function showInput() {

	document.body.scrollTop = 0; // For Safari, Move to the top of the page where the table will display
    document.documentElement.scrollTop = 0; // Move to the top of the page where the table will display
	
	var string_fname = document.getElementById("fname").value;
	console.log("The entered first name is: " + string_fname);
	var string_lname = document.getElementById("lname").value;
	console.log("The entered last name is: " + string_lname);
	var sum = string_fname * string_lname;
	
	document.getElementById('display').innerHTML = 
	"<br><br>" +
	"<table>" +
	"<tr> " +
	"<th> First Variable </th>" +
	"<th> Second Variable </th>" +
	"<th> Multiplied </th>" + 
	"</tr>" +
	"<tr>" +
	"<td>" + string_fname +  "</td>" +
	"<td>" + string_lname +  "</td>" +
	"<td>" + sum +  "</td>" +
	"</tr>" +
	"</table>";
}

/*
var rand_integer = 12;
var counter = 0;
var decider = 20;
var sorter_two = 2;

for (counter < decider; counter++;) {
	if (rand_integer < 20) {
		rand_integer--;
		var el = document.getElementById('display').innerHTML;
		el += rand_integer;
	} else if (sorter_two > 0) {
		el += sorter_two;
	} else {
		el += "We're all out of things to sort or decide upon.";
	}
}

if (new Date().getHours()) {
	var greeting = "Good day";
	document.getElementById('demo').innerHTML = greeting;
} else if (Date().getHours() > 10) {
	var greeting = "Good afternoon";
	document.getElementById('demo').innerHTML = greeting;
} else {
	var greeting = "Good evening";
	document.getElementById('demo').innerHTML = greeting;
} */