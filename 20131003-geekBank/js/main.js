'use strict';
$(document).ready(initialize);

function initialize()
{
  // event handlers for all buttons on the page go here

  $('#loadImageButton').click(loadImage);
  $('#setBalanceButton').click(setBalance);
  $('#depositButton').click(deposit);
  $('#withdrawButton').click(withdraw);
  $('#imageSourceName').focus();

  // event handlers for dynamically-created elements
  $('#depositList').on('click', '.transaction' ,clickedDeposit);
  $('#withdrawList').on('click', '.transaction', clickedWithdraw);
}

function loadImage()
{
// debugger;
  // get image address from the text box
  var imageAddress = $('#imageSourceName').val();

  // use the attr function to set the image equal to address gathered above
  $('#logo').attr('src', imageAddress);
  $('#logoInputArea').hide();
  $('#balanceEntry').focus();
}

function setBalance()
{
  var startingBalance = $('#balanceEntry').val();
  $('#balanceDisplay').val(startingBalance);
  $('#startingBalanceArea').hide();
  $('#transactionAmount').focus();
}

function deposit()
{
  var transactionAmount = calculateTransaction(1);
  var $newTransaction = $('<li>');
  $newTransaction.addClass('transaction');
  $newTransaction.text(transactionAmount);
  $('#depositList').append($newTransaction);
}

function withdraw()
{
  var transactionAmount = calculateTransaction(-1);
  var $newTransaction = $('<li>');
  $newTransaction.addClass('transaction');
  $newTransaction.text(transactionAmount);
  $('#withdrawList').append($newTransaction);
}

function calculateTransaction(plusOrMinus)
{
// debugger;
  // get amount from transaction amount text box
  var transactionAmount = parseInt($('#transactionAmount').val(), 10);

  // balance equals starting balance +/- transaction amount
  var startingBalance = parseInt($('#balanceDisplay').val(),10);
  $('#balanceDisplay').val(startingBalance + (plusOrMinus*transactionAmount));
  return transactionAmount;
}

function clickedDeposit()
{
  // $('transactionAmount').val('');
  var $currentLocation = $(this);
  $('#transactionAmount').val($currentLocation.text());
  $currentLocation.hide();
  calculateTransaction(-1);
  $('#transactionAmount').val('');


  // erase this deposit from the screen
  // subtract the amount from the balance
}

function clickedWithdraw()
{
  // $('transactionAmount').val('');
  var $currentLocation = $(this);
  $('#transactionAmount').val($currentLocation.text());
  $currentLocation.hide();
  calculateTransaction(1);
  $('#transactionAmount').val('');

}