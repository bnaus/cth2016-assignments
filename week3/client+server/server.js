// server.js

// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

const pattern_1 = ["How do you do?", "Whatsup?", "How are you?"];
const pattern_2 = ["Why?", "How?", "What?"];
const pattern_3 = ["Who are you?", "How old are you?", "What are you?"];

function matches(msg, array_of_pattern) {
  var msg_lower = msg.toLowerCase();
  for(var i = 0; i < array_of_pattern.length; i++) {
    var word_lower = array_of_pattern [i].toLowerCase();
    if(msg_lower.search(word_lower) > -1) {
      return true;
    }
  }
  return false;

}

function answer(msg)  {

  if(matches(msg, pattern_1)) {

    return "Very well thank you"

  } else if(matches(msg, pattern_2))  {

    return "You tell me."

  } else if(matches(msg, pattern_3))  {

    return "I'm a speaking robot, made by Bram but inspired by Alan Turing. My age is not specified."

   } else {

    return "I don't understand...";

  }
}


/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  socket.on('message from human', function(msg) {

    var response = answer (msg);


  	io.emit('message from robot', response);

  });

  socket.on('disconnet', function() {

  	console.log('got a disconnection');
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});

