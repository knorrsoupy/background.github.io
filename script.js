var _ = require('lodash');
console.log(_);
// var array=[1,2,3,4,8,5,6,6];
// console.log('answer',_.without(array,6));	
var css=document.querySelector("h3");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("Gradient");

function getColor()
{
	body.style.background="linear-gradient(to right,"+ color1.value + "," + color2.value +" )";
	
	css.textContent=body.style.background + ";";
}


color1.addEventListener("input",getColor)

color2.addEventListener("input",getColor)