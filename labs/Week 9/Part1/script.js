function submitForm(){
	/*
	let x =document.forms["myForm"]["choice"].value;

	const choices = ["rock", "paper", "scissors"];
	let aiChoice = choices[Math.floor(Math.random() * 3)];

	document.getElementById("form_1").style.display = "none";	
	document.getElementById("test").style.display = "none";
	*/
	/*document.getElementById("output").innerHTML = x + ", thank you for your details. We will be in touch via "+ y +" shortly.";*/


	document.getElementById("form_1").style.display = "none";	
	document.getElementById("test").style.display = "none";

	let i =99;

	for(;i>2;i--){
		document.getElementById("output").innerHTML += i+ " bottles of beer on the wall, "+ i +" bottles of beer<br/> Take one down and pass it around, "+(i-1)+" bottles of beer on the wall <br/><br/>";
	}
	document.getElementById("output").innerHTML += i+ " bottles of beer on the wall, "+ i +" bottles of beer<br/>Take one down and pass it around, "+(i-1)+" bottle of beer on the wall <br/><br/>";
	i--;

	document.getElementById("output").innerHTML += i+ " bottle of beer on the wall, "+ i +" bottle of beer<br/>Take one down and pass it around, no more bottles of beer on the wall<br/><br/>";
	document.getElementById("output").innerHTML += "No more bottles of beer on the wall, no more bottles of beer <br/>Go to the store and buy some more, 99 bottles of beer on the wall<br/><br/>";
	

/*
	System.out.print( i+ " bottles of beer on the wall, "+ i +" bottles of beer\nTake one down and pass it around, "+(i-1)+" bottle of beer on the wall\n\n");
	
	i--;

	System.out.print( i+ " bottle of beer on the wall, "+ i +" bottle of beer\nTake one down and pass it around, no more bottles of beer on the wall\n\n");
	System.out.print( "No more bottles of beer on the wall, no more bottles of beer\nGo to the store and buy some more, 99 bottles of beer on the wall\n\n");
   

	document.getElementById("output").innerHTML = "You Won!!! The computer picked "+ aiChoice + " and you choose "+ x +".";
	*/
/*
	if (aiChoice == x)
	{
		alert("Draw , AI: "+ aiChoice + " User: "+ x);
		document.getElementById("output").innerHTML = "It's a tie ! The computer picked  "+ aiChoice + " and you choose "+ x+".";

	}else if ((x == "paper" && aiChoice == "rock") || (x == "scissors" && aiChoice == "paper")|| (x == "rock" && aiChoice == "scissors"))
	{
		alert("Win , AI: "+ aiChoice + " User: "+ x);
		document.getElementById("output").innerHTML = "You Won!!! The computer picked "+ aiChoice + " and you choose "+ x +".";

	}else
	{
		alert("Lose , AI: "+ aiChoice + " User: "+ x);
		document.getElementById("output").innerHTML = "You Lost!!! The computer picked "+ aiChoice + " and you choose "+ x +".";
	}
*/


	return false;
}