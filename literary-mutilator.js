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
	let burritoReplace = splitting.map((index) => {
		if(index.toLowerCase() === "taco" || "tacos") {
			index = index.replace("taco", "burrito");
		} else return index;
		console.log(index);
	});

	//console.log(burritoReplace);


	let target = document.getElementById("taco-words");
	target.innerHTML = burritoReplace;
}



