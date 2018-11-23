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
	if (conf==true){
		var i = 0;                     //  set your counter to 

		function myLoop () {           //  create a loop 
   			setTimeout(function () {    //  call a 3s setT
      			
			if(i%4===0){document.getElementById("final").style="font-size: "+i+"px; color: purple";} else {document.getElementById("final").style="font-size: "+i+"px; color: red"; }
			//  your code here
      			i=i+2;
			      if (i < 1000) {  
        				myLoop(i); 
      } }, 50)                       //  ..  setTimeout()
   
}

myLoop();                       		
		
    	} else {alert("Goodbye");
    	}
}

