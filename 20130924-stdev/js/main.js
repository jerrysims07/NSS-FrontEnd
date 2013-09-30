var testScores = [];
var sum=0;
var average;
var stDev;
var differencesSum=0;

for(var i=0;i<10;i++)
  testScores[i]=parseFloat(prompt("Please enter the score for Test #" + (parseInt(i+1))));

// get average


// get sum total of testScores
for (var j=0;j<testScores.length;j++)
{
  sum+= testScores[j];
}

// divide by total number to get average
average=sum / testScores.length;

// display the average
console.log("The average of all test scores is " +average);

// calculate the standard deviation
// get the difference of each test score and the average, then square that difference.
var differences=[];
for (var k=0;k<testScores.length;k++)
{
  differences[k]= Math.pow((testScores[k]-average),2);
}

debugger;
// sum those squares
for (var l=0;l<differences.length;l++)
{
  differencesSum+= differences[l];
}

stDev= differencesSum/testScores.length;
console.log("The standard deviation of these test scores is "+stDev);
// divide by the total number... this is your standard deviation.