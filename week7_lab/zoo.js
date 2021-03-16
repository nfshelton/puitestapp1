function redPanda(name, age) {
	this.name = name;
	this.age = age;
	this.image_alt = "A red panda!";
	this.image = "photo1.jpg";
}
function elephant(name, age) {
	this.name = name;
	this.age = age;
	this.image_alt = "A elephant!";
	this.image = "photo2.jpg";
}
function zebra(name, age) {
	this.name = name;
	this.age = age;
	this.image_alt = "A zebra";
	this.image = "photo3.jpg";
}

let animals = (new redPanda(), new elephant(), new zebra());
let names ["patiria","anaya","javon", "lucy","paul"];

function generateRandomIndex(maxIndex){
	return Math.floor(Math.random()*maxIndex);
}

