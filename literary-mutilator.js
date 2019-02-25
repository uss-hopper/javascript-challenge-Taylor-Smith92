function spicyIn() {
	let spicyWords = document.getElementById("spicy-words");
	spicyWords.style.color = "red";
}

function spicyOut() {
	let spicyWords = document.getElementById("spicy-words");
	spicyWords.style.color = "green";
}


function movement() {
	let fire = document.getElementById("fire-words");
	fire.style.color = "white";
	fire.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}


function burrito() {
	let tacoWords = document.getElementById("taco-words");
	let words = tacoWords.innerHTML;
	let splitting = words.split(" ");
	//console.log(splitting);
	let burritoReplace = splitting.reduce((accumulator, index) => {
		index = index.toString();
		if(index === "taco") {
			index = index.replace("taco", "burrito");
		} else if(index === "burrito") {
			index = index.replace("burrito", "taco");
		}
		if(index === "tacos") {
			index = index.replace("tacos", "burritos");
		} else if(index === "burritos") {
			index = index.replace("burritos", "tacos");
		}
		if(index === "Tacos") {
			index = index.replace("Tacos", "Burritos");
		} else if(index === "Burritos") {
			index = index.replace("Burritos", "Tacos");
		}
		if(index === "tacos.") {
			index = index.replace("tacos.", "burritos.")
		} else if(index === "burritos.") {
			index = index.replace("burritos.", "tacos.")
		}
		return accumulator + " " + index;
	});

	let target = document.getElementById("taco-words");
	target.innerHTML = burritoReplace;
}



