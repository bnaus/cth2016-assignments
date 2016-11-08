/*
    file:   bookstore.js
    desc:   simple script that matches incoming arguments with books, authors, prices and kinds
    author: bramnaus
    date:   08/11/16
*/

// import 'commander' (https://www.npmjs.com/package/commander)
var program = require('commander');

// database of persons
var book1_title = "Judas";
var book1_author = "Astrid Holleeder";
var book1_price = "22.50";
var book1_kind = "Paperback";

var book2_title = "Juliana";
var book2_author = "Jolande Withuis";
var book2_price = "39.99";
var book2_kind = "Gekartonneerd";

var book3_title = "De Greppel";
var book3_author = "Herman Koch";
var book3_price = "21.99";
var book3_kind = "Gekartonneerd";

var book4_title = "We moeten allemaal feminist zijn";
var book4_author = "Chimamanda Ngozi Adichie";
var book4_price = "4.99";
var book4_kind = "Paperback";

var book5_title = "De levens van Jan Six";
var book5_author = "Geert Mak";
var book5_price = "24.99";
var book5_kind = "Paperback";

// initialise program (aka commander) 
program
  .version('0.1')
  .option('-t, --title [string]', 'Title of the book to match', 'empty') 
  .option('-a, --author [string]', 'Name of the author to match', 'empty') 
  .option('-p, --price [string]', 'Price of the book to match', 'empty')
  .option('-k, --kind [string]', 'Kind of the book to match', 'empty')  
  .parse(process.argv);

//console.log(program.title);

// match value of input's "book" argument
switch(program.title)
{
    case book1_title:
        // input match book1
        console.log(book1_title); 
        console.log(book1_author); 
        console.log(book1_price);  
        console.log(book1_kind);   
        break;
    case book2_title:
        // input match book2
        console.log(book2_title); 
        console.log(book2_author);
        console.log(book2_price);
        console.log(book2_kind);
        break;
    case book3_title:
        // input match book3
        console.log(book3_title); 
        console.log(book3_author);
        console.log(book3_price);
        console.log(book3_kind);
        break;
   	case book4_title:
        // input match book4
      	console.log(book4_title); 
        console.log(book4_author);
        console.log(book4_price);
        console.log(book4_kind);
        break;
    case book5_title:
        // input match book5
        console.log(book5_title); 
        console.log(book5_author);
        console.log(book5_price);
        console.log(book5_kind);
        break;
}
switch(program.author)
{
    case book1_author:
        // input match book1
        console.log(book1_title); 
        console.log(book1_author); 
        console.log(book1_price);  
        console.log(book1_kind);   
        break;
    case book2_author:
        // input match book2
        console.log(book2_title); 
        console.log(book2_author);
        console.log(book2_price);
        console.log(book2_kind);
        break;
    case book3_author:
        // input match book3
        console.log(book3_title); 
        console.log(book3_author);
        console.log(book3_price);
        console.log(book3_kind);
        break;
   	case book4_author:
        // input match book4
      	console.log(book4_title); 
        console.log(book4_author);
        console.log(book4_price);
        console.log(book4_kind);
        break;
    case book5_author:
        // input match book5
        console.log(book5_title); 
        console.log(book5_author);
        console.log(book5_price);
        console.log(book5_kind);
        break;
}
switch(program.price)
{
    case book1_price:
        // input match book1
        console.log(book1_title); 
        console.log(book1_author); 
        console.log(book1_price);  
        console.log(book1_kind);   
        break;
    case book2_price:
        // input match book2
        console.log(book2_title); 
        console.log(book2_author);
        console.log(book2_price);
        console.log(book2_kind);
        break;
    case book3_price:
        // input match book3
        console.log(book3_title); 
        console.log(book3_author);
        console.log(book3_price);
        console.log(book3_kind);
        break;
    case book4_price:
        // input match book4
        console.log(book4_title); 
        console.log(book4_author);
        console.log(book4_price);
        console.log(book4_kind);
        break;
    case book5_price:
        // input match book5
        console.log(book5_title); 
        console.log(book5_author);
        console.log(book5_price);
        console.log(book5_kind);
        break;
}
switch(program.kind)
{
    case book1_kind:
        // input match book1
        console.log(book1_title); 
        console.log(book1_author); 
        console.log(book1_price);  
        console.log(book1_kind);   
        break;
    case book2_kind:
        // input match book2
        console.log(book2_title); 
        console.log(book2_author);
        console.log(book2_price);
        console.log(book2_kind);
        break;
    case book3_kind:
        // input match book3
        console.log(book3_title); 
        console.log(book3_author);
        console.log(book3_price);
        console.log(book3_kind);
        break;
    case book4_kind:
        // input match book4
        console.log(book4_title); 
        console.log(book4_author);
        console.log(book4_price);
        console.log(book4_kind);
        break;
    case book5_kind:
        // input match book5
        console.log(book5_title); 
        console.log(book5_author);
        console.log(book5_price);
        console.log(book5_kind);
        break;
}