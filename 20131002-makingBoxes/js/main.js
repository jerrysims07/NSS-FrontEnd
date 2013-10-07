$(document).ready(initialize);

function initialize()
{
  $('#makeBoxesButton').click(makingBoxes);
}

function makingBoxes()
{
  var numOfBoxes = $('#numberOfBoxes').val();
  var numOfBoxes = parseInt(numOfBoxes);
  for ( var i = 0; i < numOfBoxes; i++ )
  {
    var $div = $('<div>');
    $div.addClass('box');
    $div.text(i);
    $('#boxes').append($div);
  }
}