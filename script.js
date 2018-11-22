function sayHello(){
for (i=0;i<10;i++){alert("Hello #"+(i+1));}
	document.getElementById("par1").style="display: block";
}
B
function sayThank(){
	alert("Thank You "+document.getElementById("name").value+"!");
	if(document.getElementById("name").value=="George"){
		document.getElementById("body3").style="display: block";
	} else{
	alert("You do not have access...")}
}
function doSetTimeout(x) {
  setTimeout(function(){alert("thefunc"); document.getElementById("final").style="font-size: "+x+"px";},2000);}

function final(){
var x=1; conf=confirm("Do you want to continue?");
if (conf==true) {
        for (i=0; i<100; i++){doSetTimeout(x); x=x*2;}

    } else {
        alert("Goodbye");
    }
}
