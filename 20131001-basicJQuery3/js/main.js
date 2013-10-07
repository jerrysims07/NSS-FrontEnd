$(document).ready(initialize);

function add(x,y)
{
  return x+y;
}

function initialize()
{
  $('#addButton').click(computeSum);
}

function computeSum()
{
  // debugger;
  var num1= parseFloat($('#num1').val());
  var num2= parseFloat($('#num2').val());

  $('#result').text(add(num1, num2));
}