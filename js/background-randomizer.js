var backgrounds = [
	{img: "circles-1", code: "Circles.pde"},
	{img: "diamonds-1", code: "Diamonds.pde"},
	{img: "diamonds-2", code: "Diamonds.pde"},
	{img: "diagonal-1", code: "Diagonal.pde"},
	{img: "diagonal-2", code: "Diagonal.pde"},
	{img: "random-walker-1", code: "RandomWalker.pde"},
	{img: "squares-1", code: "Squares.pde"},
	{img: "squares-2", code: "Square.pde"},
	{img: "squares-3", code: "Square.pde"}
];

var backgroundObj = backgrounds[Math.floor(Math.random()*backgrounds.length)];

//backgroundObj = backgrounds[backgrounds.length-1];

function setRandomBackground(){
	
	var backgroundUrl;
	
	if("dark" == theme){
		backgroundUrl = "/images/backgrounds/" + backgroundObj.img + "-dark.png"; 
	}
	else{
		backgroundUrl = "/images/backgrounds/" + backgroundObj.img + "-light.png"; 
	}
	
	$("body").css("background-image", "url(" + backgroundUrl + ")");
	$("#background-link").html("<a href='/images/backgrounds/code/" + backgroundObj.code + "'>View the source code that generated the background.</a>");
}