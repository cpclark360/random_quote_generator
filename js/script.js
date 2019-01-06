/***
	- Treehouse Techdegree Project #1:
	- Project #1 - A Random Quote Generator
	- Coded by Cedric Clark
***/


// Variables

var randomQuoteNumber;
var displayQuote;
var message;
var autoRefresh = setInterval(refresh,20000);
var bgcolors;
var randomColors;


//'quotes' array of objects storing 5 quotes.

quotes = [
    {
        quote: "You only live once, but if you do it right,once is enough.",
        source: "Mae West"
    },

    {
        quote: "He that falls in love with himself will have no rivals.",
        source: "Benjamin Franklin"
    },

    {
        quote: "The only impossible journey is the one you never begin.",
        source: "Anthony Robbins"
    },

    {
        quote: "The purpose of our lives is to be happy.",
        source: "Dalai Lama",
        citation: "brainyquote"
    },

    {
        quote: "Absolute power corrupts absolutely",
        source: "John Emerich",
        year: "1887"
    }
];


// 'getRandomQuote' function generating and returning a random quote from 'quotes' array.

function getRandomQuote(array) {
    randomQuoteNumber = Math.floor(Math.random() * array.length);
     
    return array[randomQuoteNumber];
};


/***  
	- 'printQuote' function is using an random quote with objects  from 'getRandomQuote'.
	- Formatting the random quote into HTML strings and  inserting into HTML ID 'quote-box'.
	- Using Conditionals to determine if the 'year' or 'citation' object keys are available before adding to HTML string. 
	- Returning 'printQuote' with the formatted HTML string stored in the 'message' variable.
***/

function printQuote(message) {
      
  div = document.getElementById('quote-box');
  div.innerHTML = message;
  displayQuote = getRandomQuote(quotes);

  message = '<p class="quote">';
  message += displayQuote.quote;
  message += '</p>'
  message += '<p class="source" >';
  message += displayQuote.source; 
       
        
  if ( displayQuote.year === '1887'){
    message += '<span class="year">';
    message += displayQuote.year;
    message += '</span > ';
  } else if( displayQuote.citation === 'brainyquote') {
      message += '<span class="citation">';
      message += displayQuote.citation;
      message += '</span>';
  } else {
      null;
  } 
    message += '</p>';
    return printQuote(message);
}


// Auto-Refreshes Quote every 20 seconds using setInterval Method.

function refresh(){
	return printQuote();
}


// event listener triggers  a call or "invoke" the 'printQuote' function.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

