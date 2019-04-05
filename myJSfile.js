function myfunction(){
document.getElementById("demo").innerHTML = "This is my new text";
}

document.getElementById('demo').style.color = 'blue'

function usingVariables(){
var userName = prompt("What is your name?")
	var textElement = document.getElementById("text")
	textElement.innerHTML = "Hi " + userName
	var header = document.getElementById("head")
	header.innerHTML = header.innerHTML + "By" + userName
}
