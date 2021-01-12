// Write your JS in here
var pics = [
	"imgs/kitty_bed.JPG",		//0
	"imgs/kitty_basket.JPG", 	//1
	"imgs/kitty_laptop.jpg",	//2
	"imgs/kitty_door.jpg",		//3
	"imgs/kitty_sink.JPG",		//4
	"imgs/kitty_wall.jpg"		//5
								//6
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});

