var cont = 1;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
var months = ["JAN","FEB","MAR","APR", "MAY","JUN", "JUL","AUG","SEP","OCT","NOV","DEC"];
window.onload = function(){
	
	var date = new Date();
	document.getElementById('day').innerHTML = date.getDate();
	document.getElementById('year').innerHTML = date.getFullYear();
	document.getElementById('monthName').innerHTML = months[date.getMonth()];
	document.getElementById('week').innerHTML = days[date.getUTCDay()];
	
	document.getElementById("add_but").addEventListener("click", function(){
		addNode(false);
	});
	
	addNode(true);
	addNode();
	
}

function addNode(checked){
	var newNode = document.createElement('article');      
newNode.innerHTML  = "<input type='checkbox' id='t"+cont+"' "+((checked)?"checked":"")+"/> <label for='t"+cont+"'></label><span contenteditable='true'>Task #"+cont+"</span>";
		newNode.id = "article"+cont;
		newNode.ondblclick = onDblClick;
		cont++;
	var main_sec = document.getElementById("main_sec");
		main_sec.appendChild(newNode);
		
		main_sec.scrollTop = main_sec.scrollHeight;
}

function onDblClick(event){
	document.getElementById(event.target.id).remove();
}
