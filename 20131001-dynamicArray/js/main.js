$(document).ready(initialize);

function initialize()
{
  $('#computeButton').click(performConversion);
}

function performConversion()
{
  // get input from the text box in the form "x, y"
  var inputString = $('#textInput').val();

  // break up the string into two numbers.
  var inputNumbers = inputString.split(', ');
// debugger;
  // build an array of size x with values of 1 through x in the corresponding indeces
  var builtArray = [];
  for (var i=0;i<inputNumbers[0];i++)
  {
    builtArray.push(i+1);
  }

  // multiply each element by y and enter into another array.
  var runningSum = 0;
  for (var j=0;j<builtArray.length;j++)
  {
    builtArray[j] *= inputNumbers[1];
    runningSum += builtArray[j];
  }

  // Display: “3+6+9+12+15=45”
  var builtString = builtArray.join('+') + '=' + runningSum;
  $('#result').val(builtString);
}