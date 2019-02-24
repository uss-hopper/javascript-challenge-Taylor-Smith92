/**let target = document.getElementById("target");

target.fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "GET",
} )
	.then(response => response.json())
	.then(json => console.log(json))
**/




function burrito() {
	let tacoWords = document.getElementById("taco-words");
	let words = tacoWords.innerHTML;
	let splitting = words.split(" ");
	//console.log(splitting);
	let burritoReplace = splitting.reduce((accumulator, index) => {
		index = index.toString();
		if(index === "taco") {
			index = index.replace("taco", "burrito");
			console.log(index);
		} else if(index === "burrito") {
			index = index.replace("burrito", "taco");
			console.log(index);
		}

		if(index === "tacos") {
			index = index.replace("tacos", "burritos");
			console.log(index);
		} else if(index === "burritos") {
			index = index.replace("burritos", "tacos");
			console.log(index);
		}

		if(index === "Tacos") {
			index = index.replace("Tacos", "Burritos");
			console.log(index);
		} else if(index === "Burritos") {
			index = index.replace("Burritos", "Tacos");
			console.log(index);
		}

		if(index === "tacos.") {
			index = index.replace("tacos.", "burritos.")
		} else if(index === "burritos.") {
			index = index.replace("burritos.", "tacos.")
		}

		return accumulator + " " + index;
	});

	//console.log(burritoReplace);


	let target = document.getElementById("taco-words");
	target.innerHTML = burritoReplace;
}



