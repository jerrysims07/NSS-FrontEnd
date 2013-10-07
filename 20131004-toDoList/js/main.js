$(document).ready(initialize);

function initialize()
{
// debugger;
  $('dueDateInput').focus();
  $('#addTaskButton').click(addTask);
  $('table').on('click', '.deleteButton', deleteRow);
  $('table').on('click', '.checkboxes', checkForBoxProperty);
  $('table').on('click', '.upImageClass', moveRowUp);
  $('table').on('click', '.downImageClass', moveRowDown);

}

function addTask()
{
  // alert('you clicked the add task button');

  // get due date, task name, and color from the input boxes
  var dueDate = $('#dueDateInput').val();
  var taskName = $('#taskNameInput').val();
  var color = $('#colorInput').val();

  // build new row
  var $tr = $('<tr>');
  var $dueDate = $('<td>');
  var $taskName = $('<td>');
  var $color = $('<td>');
  var $done = $('<td>');
  var $remove = $('<td>');
  var $moveUpDown = $('<td>');

  // add classes to newly created data elements
  $dueDate.addClass('dueDateElement');
  $taskName.addClass('taskNameElement');
  $color.addClass('colorElement');
  $done.addClass('doneElement');
  $remove.addClass('removeElement');
  $moveUpDown.addClass('moveUpDownElement');

  // append the new row to the table
  $('table').append($tr);
  $tr.append($dueDate, $taskName, $color, $done, $remove, $moveUpDown);

  // apply values to newly created td's
  $dueDate.text(dueDate);
  $taskName.text(taskName);

  // create div for the color categorization
  var $colorDiv = $('<div>');
  $colorDiv.addClass('colorDivClass');
  $colorDiv.css('background-color', color);
  $color.append($colorDiv);
// debugger;

  // create checkbox for done column
  var $checkBoxContainer = $('<div>');
  var $doneCheckBox = $('<input>');
  $doneCheckBox.addClass('checkboxes');
  $doneCheckBox.attr('type', 'checkbox');
  $done.append($checkBoxContainer);
  $checkBoxContainer.append($doneCheckBox);
// debugger;


  // dynamically create a new button to delete row
  var $removeButton = $('<input>');
  $removeButton.addClass('deleteButton');
  $removeButton.attr('type', 'button');
  $removeButton.attr('value', 'delete task');
  $remove.append($removeButton);

// debugger;

  // add up and down arrows for the moving rows
  var $upImage = $('<img>');
  var $downImage = $('<img>');
  $upImage.addClass('upImageClass');
  $downImage.addClass('downImageClass');
  $upImage.attr('src', 'images/up.png');
  $downImage.attr('src', 'images/down.png');
  $moveUpDown.append($upImage, $downImage);

  // erase values from inputs and refocus
  clearInputs();
// debugger;
}

function clearInputs()
{
  $('#dueDateInput').val('');
  $('#taskNameInput').val('');
  $('#colorInput').val('');
  $('#dueDateInput').focus();
}

function deleteRow()
{
// debugger;
  var $currentButton = $(this);
  $rowForDelete = $currentButton.closest('tr');
  // debugger;
  $rowForDelete.remove();
}

function checkForBoxProperty()
{
  var $clicked = $(this);
  var $parentRow = $clicked.closest('tr');
  if($clicked.prop('checked'))
  {
    // add checkedBox class to the row containing this button.
    $parentRow.addClass('checkedBox');
  }
  else
  {
    $parentRow.removeClass('checkedBox');
  }
// debugger;
}

function moveRowUp()
{
  var $clickedRow = $(this).closest('tr');
  var $siblingForSwitch = $clickedRow.prev();
  $clickedRow.detach();
  $siblingForSwitch.before($clickedRow);
}

function moveRowDown()
{
  var $clickedRow = $(this).closest('tr');
  var $siblingForSwitch = $clickedRow.next();
  $clickedRow.detach();
  $siblingForSwitch.after($clickedRow);

}