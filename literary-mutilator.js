/**let target = document.getElementById("target");

target.fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "GET",
} )
	.then(response => response.json())
	.then(json => console.log(json))
**/




function lookInScriptJsLine11(split) {
	let tacoWords = document.getElementById("taco-words");
	let words = tacoWords.innerHTML;
	let splitting = words.split(" ");
	let burritoReplace = splitting.map((index) => {
		index = index.replace("taco", "burrito");
		console.log(index);
	});


	let target = document.getElementById("taco-words");
	target.innerHTML = burritoReplace;
}



