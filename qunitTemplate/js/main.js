function addThree(x)
{
  return x+3;
}

function square(x)
{
  return x*x;
}

function area (x, y)
{
  return x*y;
}

function volume(x, y, z)
{
  return area(x,y)*z;
}

function power(base, power)
{
  if(power==0)
  {
    return 1;
  }
  else
  {
    var returnTotal=base;
    for(var i=1;i<power;i++)
      returnTotal*=base;
  }
  return returnTotal;
}

function greeting(greet, name)
{
  return greet + ", " + name + "!";
}

function pigLatin(word)
{
  return (word.slice(1)+word[0]+"a");
}

function pigGreeting(greet, name)
{
  return greeting(pigLatin(greet), pigLatin(name));
}

function pigSentence(inString)
{
  var tempString;
  var tempOutString=[];

  // break input into an array
  tempString = inString.split(" ");
  // go through array and change each element to pig pigLatin
  for(var i=0;i<tempString.length;i++)
    tempOutString.push(pigLatin(tempString[i]));

  // join array back into single inString
  // return new string
  return tempOutString.join(" ");
}