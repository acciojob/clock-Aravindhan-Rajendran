//your JS code here. If required.
var k=document.getElementById("timer");
let current=new Date();
setInterval(
	function(){
		current=new Date();
		k.innerHTML=current.toLocaleString();
	},1000
)


