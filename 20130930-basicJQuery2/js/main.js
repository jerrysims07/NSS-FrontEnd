$(document).ready(initialize);

function initialize()
{
  // set up a click handler
  $('#button1').click(changeToGreen);
  $('#nameBtn').click(countChars);
}

function changeToGreen()
{
  $('#greenDiv').css('background-color', 'green');
}

function countChars()
{
  // debugger;
  // get value from the text box
  var outputString = $('#nameTxt').val();
  // alert(outputString);

  // output string length

  outputString = "\'" + $('#nameTxt').val() + "\' has " + $('#nameTxt').val().length + " characters.";
  $('#nameDiv').text(outputString);
}