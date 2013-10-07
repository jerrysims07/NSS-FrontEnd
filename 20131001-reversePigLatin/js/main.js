$(document).ready(initialize);


function initialize()
{
  $('#convertButton').click(handleInputOutput);
}

function handleInputOutput()
{
  // get string from #original
  var originalString = $('#original').val();

  // send string to flipAndReverse function
  var changedString = flipAndReverse(originalString);

  // output new string in #converted
  $('#converted').val(changedString);
}

function toPig(original)
{
  // put everything but first letter into new variable
  var pigLatin = original.slice(1);

  // add first letter + an 'a' to the end of that new variable
  pigLatin += original[0] + "a";

  // return that variable
  return pigLatin;
}

function flipAndReverse(incomingString)
{
  // break the incoming string into an array broken down by delimiter of comma and space
  var words = incomingString.split(", ");

  // debugger;

  // convert each individual element into pig pigLatin
  for (var i=0;i<words.length;i++)
    words[i] = toPig(words[i]);

  // reverse the order and add the comma & space delimters back into a string
  words = words.reverse();
  outgoingString = words.join("; ");

  // return
  return outgoingString;
}