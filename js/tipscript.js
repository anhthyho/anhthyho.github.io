// script.js
// hide tip amount on load
document.getElementById("tip").style.display = "none";
document.getElementById("bill").style.display = "none";
document.getElementById("each").style.display = "none"; 

//click button to call function
document.getElementById("calculate").onclick = function(){
	calculateTip();
}

function calculateTip(){
	var cost = document.getElementById("cost").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var people = document.getElementById("people").value; 

	if(cost === "" || serviceQuality == 0){
		window.alert("One or more fields is missing values");
		return;
	}

	if (people === "" || people <=1){
		people=1; 
		document.getElementById("each").style.display = "none";
	}
	else{
		document.getElementById("each").style.display = "block";
	}

	var total = (cost*serviceQuality)/people;
	total = Math.round(total*100)/100; 
	total = total.toFixed(2);

	var indCost = cost/people; 
	indCost = Math.round(indCost*100)/100; 
	indCost = indCost.toFixed(2);

	var billTotal = (parseFloat(indCost) + parseFloat(total));
	billTotal = Math.round(billTotal*100)/100; 
	billTotal = billTotal.toFixed(2);

	document.getElementById("tip").style.display = "block";
	document.getElementById("tp").innerHTML = indCost +" + " + total;

	document.getElementById("bill").style.display = "block";
	document.getElementById("bp").innerHTML = billTotal; 

}
