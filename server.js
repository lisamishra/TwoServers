var http = require("http");

var PORTONE = 7000; 
var PORTTWO = 7500;

function handleRequestOne (request, response) {
	response.end("you look great today");
}
function handleRequestTwo (request, response) {
	response.end ("you are the human embodiment of trash");
}

var serverOne = http.createServerOne(handleRequestOne);
var serverTwo = http.createServerTwo(handleRequestTwo);

serverOne.listen(PORTONE, function(){
	console.log("Server one listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function(){
	console.log("Server two listening on: http://localhost:%s", PORTTWO);
});