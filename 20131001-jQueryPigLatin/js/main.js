$(document).ready(initialize);

function toPig(originalWord)
{
  // get first letter of original originalWord
  var firstLetter = originalWord[0];

  // make new string with everything but first letter of original originalWord
  var pigLatinWord = originalWord.slice(1);

  // add to that string the first letter plus the letter 'a'
  pigLatinWord += firstLetter + "a";

  // return the result
  return pigLatinWord;
}

function convertToPigLatin()
{
  // debugger;

  // get the original word from html
  var originalWord = $('#original').val();

  // call the toPig function with original word
  pigLatinWord = toPig(originalWord);

  // put the result in the proper place
  $('#pigLatin').text(pigLatinWord);
}

function initialize()
{
  $('#pigButton').click(convertToPigLatin)
}