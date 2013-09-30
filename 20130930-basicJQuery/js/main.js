$(document).ready(initialize);

function alertMe()
{
  alert('you have alerted me');
}

function changeDivText()
{
  var name = $('#name').val();
  var color = $('#color').val();
  $('#b').text(name).css('background-color', color);
}

function verifyAge()
{
  // get the age from the text box
  // convert string to number
  var age = parseInt($('#age').val());
  // perform the logic check and return appropriate value
  if(age>=21)
    $('#ageDiv').text("You can drink!")
                .css('background-color', 'red');
  else $('#ageDiv') .text ("Sorry. You are not old enough")
                    .css('background-color', 'gray');
}


function initialize()
{
  $('#clicker').click(changeDivText);

  // set up a click handler
  $('#ageCheck').click(verifyAge);

}