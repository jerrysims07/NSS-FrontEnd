'use strict'
$(document).ready(initialize);

function initialize()
{
  $('#add').click(addRow);
  $('table').on('click', '.rsvp', addRSVP);
  $('table').on('click', '.nuke', nuke);
  $('table').on('click', '.upImageClass, .downImageClass', clickImage);
}

function addRow()
{
  // create a row, three columns, and add them to the tree.

  // create a row
  var $tr = $('<tr>');
  var $name = $('<td>');
  var $food = $('<td>');
  var $ctrl = $('<td>');
  var $nuke = $('<td>');
  var $upDown = $('<td>');

  // add classes to the td's
  $name.addClass('nameClass');
  $food.addClass('foodClass');
  $ctrl.addClass('ctrlClass');
  $nuke.addClass('nukeClass');
  $upDown.addClass('upDownClass');

  // attach the tr to the table
  $('table').append($tr);

  // attach the td's we just created to the 'tr'
  // $tr.append([$name, $food, $ctrl]);

  // add inputs to the third td
  var $dataEntryText = $('<input>');
  $dataEntryText.attr('type', 'text');
  var $submitDataButton = $('<input>');
  $submitDataButton.attr('type', 'button');
  $submitDataButton.val('RSVP');
  $submitDataButton.addClass('rsvp');

  // format the nuke button
  var $nukeButton = $('<input>');
  $nukeButton.attr('type', 'button');
  $nukeButton.val('NUKE');
  $nukeButton.addClass('nuke');
// debugger;
  // add images to the 5th td
  var $upImage = $('<img>');
  var $downImage = $('<img>');

  $upDown.append($upImage, $downImage);
  $upImage.addClass('upImageClass');
  $downImage.addClass('downImageClass');
  $upImage.attr('src', 'images/up.png');
  $downImage.attr('src', 'images/down.png');

  // attach all the buttons and inputs to the tree
  $ctrl.append($dataEntryText, $submitDataButton);
  $nuke.append($nukeButton);
  $tr.append($name, $food, $ctrl, $nuke, $upDown);

}

function addRSVP()
{

// debugger;
  var $clickedButton = $(this);
  var $textbox = $clickedButton.prev();
  var text = $textbox.val();
  var items = text.split(', ');
// debugger;

  var $nameBox = $clickedButton.parent().prev().prev();
  var $foodBox = $clickedButton.parent().prev();
  $nameBox.text(items[0]);
  $foodBox.text(items[1]);

  var $textBox = $clickedButton.prev();
  $textBox.hide();
  $clickedButton.hide();
}

function nuke()
{
  var $clickedButton = $(this);
  var $tr = $clickedButton.parent().parent();
  $tr.remove();
}

function clickImage()
{
// debugger;
  // get class of the item that was clicked
  var $clickedImage = $(this);
  switch ($clickedImage.attr('class'))
  {
  case 'upImageClass':
    moveRowUp($clickedImage);
    break;
  case 'downImageClass':
    moveRowDown($clickedImage);
    break;
  default:
    alert('something has gone horribly wrong.');
  }
}

function moveRowUp($clickedImage)
{
// debugger;

  // store the row in a variable.
  var $clickedRow = $clickedImage.closest('tr');

  // store the upstairs sibling in a variable
  var $upstairsNeighbor = $clickedRow.prev();

  // detach the row
  $clickedRow.detach();

  // re-attach the row before the upstairs neighbor
  $upstairsNeighbor.before($clickedRow);
}

function moveRowDown($clickedImage)
{
  // store the row in a variable.
  var $clickedRow = $clickedImage.closest('tr');

  // store the upstairs sibling in a variable
  var $downstairsNeighbor = $clickedRow.next();

  // detach the row
  $clickedRow.detach();

  // re-attach the row before the upstairs neighbor
  $downstairsNeighbor.after($clickedRow);

}