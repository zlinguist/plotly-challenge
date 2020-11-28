console.log("Hello")

//d3.json("data/samples.json", data => {
//	console.log("Hello")
//	console.log(data)
//})

d3.json("data/samples.json").then(
	data => {
		console.log("Hello")
		console.log(data)
})
