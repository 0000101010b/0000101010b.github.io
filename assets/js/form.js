function submitForm(){
	let x =document.forms["myForm"]["name"].value;
	let y =document.forms["myForm"]["email"].value;
    let z =document.forms["myForm"]["subject"].value;
    let w =document.forms["myForm"]["message"].value;
	

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Email must be filled out");
        return false;
    }
    if (z == "") {
        alert("Subject must be filled out");
        return false;
    }
    if (w == "") {
        alert("Message must be filled out");
        return false;
    }

    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(y))
    { 
        alert("Email invalid");
        return false;
    }


	document.getElementById("output").innerHTML = x + ", thank you for your details. We will be in touch via "+ y +" shortly.";

	return false;
}