var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

setGradientRandom();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setGradientRandom);

function setGradient(){
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background;
}

function setGradientRandom(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

function randomColor(){
	return "#"+(Math.floor(Math.random()*(0x1000000))).toString(16);
}