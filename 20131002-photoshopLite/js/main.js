'use strict';
$(document).ready(initialize);

function initialize()
{
  // focus initially on the text box
  $('#color').focus();

  // click handler for the submit button
  $('#submitButton').click(drawBox);

  // click handler for the brush
  $('#currentColor').click(brushClick);

  // click handler for drawCanvasButton
  $('#drawCanvasButton').click(drawCanvas);

  //$('parent_selector').on('name of event', 'child selector', name_of_function);
  $('#colors').on('click', '.box', boxClick);
  $('#canvas').on('mouseover', '.canvasBox', canvasHover);

}

function canvasHover()
{
  // debugger;
  var $currentLocation = $(this);
  var brushColor  = $('#currentColor').css('background-color');
  $currentLocation.css('background-color', brushColor);
}

function drawBox()
{
  // get color from text box
  var $color = $('#color').val();
  var $newBox = $('<div>');
  $newBox.addClass('box');
  $newBox.css('background-color', $color);
  $('#color').val('');
  $('#color').focus();
  $('#colors').append($newBox);
  // drawABunch($newBox);
}

function boxClick()
{
  var $clickedBox = $(this);
  var color = $clickedBox.css('background-color');
  // alert('You just clicked '+ color +".");
  $('#currentColor').css('background-color', color);
}

function brushClick()
{
  alert('The brush was clicked');
}

function drawCanvas()
{
  // debugger;

  // get size of canvas
  var $numberOfBoxes = parseInt($('#sizeOfCanvas').val());

  for( var i=0; i<$numberOfBoxes; i++)
  {
    var $nextBox = $('<div>');
    $nextBox.addClass('canvasBox');
    // $nextBox.css('background-color', $('#currentColor').css('background-color'));
    $('#canvas').append($nextBox);
  }


}