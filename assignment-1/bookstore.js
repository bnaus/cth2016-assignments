/*
	file: 	person.js
	desc: 	simple script that matches incoming arguments (--book) 
			with a simple database
	author: bramnaus
	date: 	07/11/16
*/


// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of persons
var book1_name = "Maurice";
var book1_age = 83;
var book1_lan = "french";

var book2_name = "Lotte";
var book2_age = 32;
var book2_lan = "danish";

var book3_name = "Geert";
var book3_age = 42;
var book3_lan = "dutch";

// initialise program (aka commander) 
program
  .version('0.0.1')
  .option('-n, --name [value]', 'Name of the person to match', 'empty') // add option --name with default value "empty"
  .parse(process.argv);								

// check what the value of name is regardless of if it matches or not
console.log(program.name); // this line can be commented out

// match value of input's "name" argument
switch(program.name) 
{
	case book1_name:
		// input match book1
		console.log(book1_name);
		console.log(book1_age);
		console.log(book1_lan);
		break;
	case book2_name:
		// input match book2
		console.log(book2_name);
		console.log(book2_age);
		console.log(book2_lan);
		break;
	case book3_name:
		// input match person3
		console.log(book3_name);
		console.log(book3_age);
		console.log(book3_lan);
		break;
	default:
		// default message if no match
		console.log('No match...');
		break;
}