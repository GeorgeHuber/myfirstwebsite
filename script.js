function sayHello(){
for (i=0;i<10;i++){alert("Hello #"+(i+1));}
	document.getElementById("par1").style="display: block";
}

function sayThank(){
	alert("Thank You "+document.getElementById("name").value+"!");
	if(document.getElementById("name").value=="George"){
		document.getElementById("body3").style="display: block";
	} else{
	alert("You do not have access...")}
}

function final(){
conf=confirm("Do you want to continue?");



}
