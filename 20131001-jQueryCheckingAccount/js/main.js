$(document).ready(initialize);

function initialize()
{
  $('#depositButton').click(processDeposit);
  $('#withdrawButton').click(processWithdraw);


}

function processDeposit()
{
  // get current balance
  var currentBalance = $('#balance').val();

  // strip the dollar sign and convert to numbers
  var currentBalance = parseFloat(currentBalance.slice(1));

  // get value of current transaction
  currentTransAmount = parseFloat($('#amount').val());

  // pass those two numbers to the calculation function
  newBalance = deposit(currentBalance, currentTransAmount);

  // update the balance with new value
  $('#balance').val('$'+newBalance);
  $('#amount').val(0);

  // check for negative value and add red background if negative
  if(newBalance>=0) $('#balance').removeClass('isNegative');

}

function processWithdraw()
{
  // get current balance
  var currentBalance = $('#balance').val();

  // strip the dollar sign and convert to numbers
  var currentBalance = parseFloat(currentBalance.slice(1));

  // get value of current transaction
  currentTransAmount = $('#amount').val();

  // pass those two numbers to the calculation function
  newBalance = withdraw(currentBalance, currentTransAmount);


  // update the balance with new value
  $('#balance').val('$'+newBalance);
  $('#amount').val(0);


  // check for negative value and add red background if negative
  if(newBalance<0) $('#balance').addClass('isNegative');
}

function deposit(balance, depositAmount)
{
  return balance + depositAmount;
}

function withdraw(balance, withdrawAmount)
{
  return balance - withdrawAmount;
}

