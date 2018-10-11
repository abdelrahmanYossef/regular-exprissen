

// var input = document.getElementsByTagName('input');

// var contacts

// function addData() {

// 	var uname = input[0].value;
// 	var uphone = input[1].value;
// 	var uemail = input[2].value;
// 	var ulocation = input[3].value;

// 	if ( uname != "" && uphone != "" && uemail != "" && ulocation != "") {

// 	var person = {
// 		name: uname,
// 		phone: uphone,
// 		email:  uemail,
// 		location: ulocation
// 	}

// 	contacts.push(person);

// 	// localStorage.setItem("allContacts") = JSON.stringify(contacts);
// 	localStorage["allContacts"] = JSON.stringify(contacts);

// 	display();
// 	clear();

// 	} else {
// 		window.alert("Oops!.. There is empty field");
// 	}
// }



// function display() {

// 	if (localStorage["allContacts"] == null ){
// 		contacts = [];
// 	} else {
// 		contacts = JSON.parse(localStorage.getItem("allContacts"));
// 		var row = "";

// 	for ( var i = 0; i < contacts.length; i++) {
// 		row = row + "<tr><td>" + contacts[i].name + "</td><td>" + contacts[i].phone + "</td><td>" + contacts[i].email + "</td><td>" + contacts[i].location + "</td></tr>";
// 	}

// 	document.getElementById('body_table').innerHTML = row;
// 	}
// 	// contacts = JSON.parse(localStorage.getItem("allContacts"));

// 	// if ( contacts == null) {
// 	// 	contacts = "";
// 	// }
	
// }

// function clear() {
// 	for ( var i = 0; i < input.length; i++) {
// 		input[i].value = "";
// 	}
// }

// display();



// function collapse() {

// 	var form = document.getElementById("collapseExample");

// 	if ( form.style.display == "none") {
// 		form.style.display = "block";
		
// 	} else {
// 		form.style.display = "none";
		
// 	}

// }
// collapse();



var input = document.getElementsByTagName('input');

var contacts

var warning1 = document.getElementById('invalid1');
var success1 = document.getElementById('valid1');

var warning2 = document.getElementById('invalid2');
var success2 = document.getElementById('valid2');

var warning3 = document.getElementById('invalid3');
var success3 = document.getElementById('valid3');

var warning4 = document.getElementById('invalid4');
var success4 = document.getElementById('valid4');

function validate1() {

	var name = /^[A-Z]{1}[a-z]{1,}( [a-z]+)*$/;
	// var phone = /^(010|011|012|015)[0-9]{8}$/;
	// var email = /^[a-z]+[_.-][a-z]+[@][a-z]+[.][a-z.]*(com|gmail|org|net)/;
	var location = /^[a-z]+$/;
	// console.log(name.test(input[0].value));
	// console.log(phone.test(input[1].value));
	// console.log(email.test(input[2].value));
	// console.log(location.test(input[3].value));

	if (name.test(input[0].value) == false ) {
		warning1.style.display = "block";
		success1.style.display = "none";
	} else if (true) {
		warning1.style.display = "none";
		success1.style.display = "block";
	} else if (name.test(input[0].value) == null) {
		warning1.style.display = "none";
		success1.style.display = "none";
	}


}

function validate2() {

	var phone = /^(010|011|012|015)[0-9]{8}$/;
	
	if(phone.test(input[1].value) == true) {
		warning2.style.display ="none";
		success2.style.display ="block";
	} else if(phone.test(input[1].value) == false) {
		warning2.style.display ="block";
		success2.style.display ="none";
	} else if (phone.test(input[1].value) == null) {
		warning2.style.display ="none";
		success2.style.display ="none";
	}

}

function validate3() {

	var email = /^[a-z]+[_.-]*[a-z]+[@][a-z]+[.][a-z.]*(com|gmail|org|net)/;
	
	if(email.test(input[2].value) == true) {
		warning3.style.display ="none";
		success3.style.display ="block";
	} else if(email.test(input[2].value) == false) {
		warning3.style.display ="block";
		success3.style.display ="none";
	} else if (email.test(input[2].value) == null) {
		warning3.style.display ="none";
		success3.style.display ="none";
	}

}



function addData() {

	var name = /^[A-Z]{1}[a-z]{1,}( [a-z]+)*$/;
	var phone = /^(010|011|012|015)[0-9]{8}$/;
	var email = /^[a-z]+[_.-]*[a-z]+[@][a-z]+[.][a-z.]*(com|gmail|org|net)/;
	var location = /^[a-z]+$/;
	
	var Uname = input[0].value;
	var Uphone = input[1].value;
	var Uemail = input[2].value;
	var Ulocation = input[3].value;

	if ( (Uname != "" && name.test(Uname) != false) && (Uphone != "" && phone.test(Uphone) != false) && (Uemail != "" && email.test(Uemail) != false) && (Ulocation != "" && location.test(Ulocation) != false) ) {
			var person = {
				name: Uname,
				phone: Uphone,
				email: Uemail,
				location: Ulocation
			}

		contacts.push(person);

		localStorage['first_data'] = JSON.stringify(contacts);

		display();
		clear();
	} else {
		alert("Oops!.. There are invalid fields!");
	}
}


function display() {

	if ( localStorage['first_data'] == null) {
		contacts = [];
	} else {
		contacts = JSON.parse(localStorage.getItem("first_data"));
		var row ="";

		for ( var i = 0; i < contacts.length; i++) {
			row = row + "<tr><td>" + contacts[i].name + "</td><td>" + contacts[i].phone + "</td><td>" +contacts[i].email + "</td><td>" +contacts[i].location + "</td></tr>";
	}

	document.getElementById('body_table').innerHTML = row;
	}
	
}

display();

function clear() {
	input[0].value = "";
	input[1].value = "";
	input[2].value = "";
	input[3].value = "";

	warning1.style.display = "none";
	success1.style.display = "none";

	warning2.style.display = "none";
	success2.style.display = "none";

	warning3.style.display = "none";
	success3.style.display = "none";
}

var minimize = document.getElementById('collapseExample');

function collapse() {
	if ( minimize.style.display == "none") {
		minimize.style.display = "block";
		
	} else {
		minimize.style.display = "none";
		
	}
}

collapse();