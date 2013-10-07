$(document).ready(initialize);

function initialize()
{
  $('#colorButton').click(createBoxes);
  $('#colorString').focus();
  $('#clearInput').click(clearInput);
  $('#clearBoxes').click(clearBoxes);
}

function createBoxes()
{
  var inputString = $('#colorString').val();
// debugger;

  var colors = inputString.split(',');
  for ( var i=0; i < colors.length; i++ )
  {
    var $newDiv = $('<div>');
    $newDiv.addClass('box');
    $newDiv.text(colors[i]);
    $newDiv.css('background-color', colors[i]);
    $('#boxes').append($newDiv);
  }
}

function clearInput()
{
  $('#colorString').val('');
  $('#colorString').focus();
}

function clearBoxes()
{
  $('#boxes').empty();
  clearInput();
}