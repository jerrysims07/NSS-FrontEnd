var balance =0;

//Prompt user for opening balance and send output to parseFloat
balance = parseFloat(prompt("Please enter your beginnging balance:"));

// Prompt users for deposits
balance += parseFloat(prompt("Enter deposit one:"));
balance += parseFloat(prompt("Enter deposit two:"));
balance += parseFloat(prompt("Enter deposit three:"));

// Prompt user for withdraws
balance -= parseFloat(prompt("Enter withdraw one:"));
balance -= parseFloat(prompt("Enter withdraw two:"));
balance -= parseFloat(prompt("Enter withdraw three:"));

// check whether balance is less than zero, if it is withdraw $50
if(balance < 0)  balance -= 50;


document.write("Your final balance is $"+ ((balance).toFixed(2)));