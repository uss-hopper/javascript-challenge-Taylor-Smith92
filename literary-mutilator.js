let target = document.getElementById("target");

target.fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "GET",
} )
	.then(response => response.json())
	.then(json => console.log(json))