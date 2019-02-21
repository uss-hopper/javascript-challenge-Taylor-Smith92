/**let target = document.getElementById("target");

target.fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "GET",
} )
	.then(response => response.json())
	.then(json => console.log(json))
**/

let tacoWords = document.getElementById("taco-words");
const tacoButton = document.getElementById("taco-btn");
let words = tacoWords.innerHTML;

let onBtnClick = function(words) {
	for (var i=0; i<words.length, i++) {
		words[i].textContent = words[i].textContent.replace("taco", "burrito");
	}
};

tacoButton.addEventListener("click", onBtnClick);



