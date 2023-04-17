function submitForm(){
/*	let x =document.forms["myForm"]["choice"].value;
*/
	const choices = ["rock", "paper", "scissors"];
	let aiChoice = choices[Math.floor(Math.random() * 3)];

	document.getElementById("form_1").style.display = "none";	
	document.getElementById("test").style.display = "none";

	let userChoices = [];
	let aiChoices= [];


	/*document.getElementById("output").innerHTML = x + ", thank you for your details. We will be in touch via "+ y +" shortly.";*/

	let i=0;
	for(;i<5;i++)
	{
		const z= prompt("Enter your choice 1=rock, 2=paper, 3=scissors :");
		let x = choices[z-1];

		userChoices[i] = x;
		aiChoices[i]   = aiChoice;

		if (aiChoice == x)
		{
			alert("Draw , AI: "+ aiChoice + " User: "+ x);
			/*document.getElementById("output").innerHTML = "It's a tie ! The computer picked  "+ aiChoice + " and you choose "+ x+".";*/

		}else if ((x == "paper" && aiChoice == "rock") || (x == "scissors" && aiChoice == "paper")|| (x == "rock" && aiChoice == "scissors"))
		{
			alert("Win , AI: "+ aiChoice + " User: "+ x);
			document.getElementById("output").innerHTML = "You Won!!! The computer picked "+ aiChoice + " and you choose "+ x +".</br></br>";
			for (j=0; j<i+1;j++)
			{
				document.getElementById("output").innerHTML += "Round "+(j+1)+": User choose " + userChoices[j] +" and the computer picked "+aiChoices[j]+".</br>";
			}
			break;
		}else
		{
			alert("Lose , AI: "+ aiChoice + " User: "+ x);
			/*document.getElementById("output").innerHTML = "You Lost!!! The computer picked "+ aiChoice + " and you choose "+ x +".";*/
		}
		aiChoice = choices[Math.floor(Math.random() * 3)];
	}

	if(i==5)
	{
		document.getElementById("output").innerHTML = "Sorry, no tries left!!!</br></br>";

		for (j=0; j<i;j++)
		{
			document.getElementById("output").innerHTML += "Round "+(j+1)+": User choose " + userChoices[j] +" and the computer picked "+aiChoices[j]+".</br>";
		}
		
	}


	return false;
}