// test( "<name of function>", function() {
//   deepEqual( <actual value>, <expected value>, "what this test is doing" );
//   deepEqual( <actual value>, <expected value>, "testing this function with different values" );
// });

test( "1+1", function() {
  deepEqual( 1+1, 2, "adding 1 and 1" );
});

test ("nashville[0]", function (){
  deepEqual( "nashville"[0], "n", "getting first letter in string nashville");
});

test ("addThree", function (){
  deepEqual( addThree(5), 8, "adding 3 to 5");
});

test ("addThree", function (){
  deepEqual( addThree(7), 10, "adding 3 to 7");
});


test ("square", function(){
  deepEqual(square(3),9,"square of 3");
  deepEqual(square(5),25,"square of 5");
});

test("area", function(){
  deepEqual(area(3, 5), 15, "area with sides of 3 & 5");
  deepEqual(area(7, 5), 35, "area with sides of 7 & 5");
});

test("volume", function(){
  deepEqual(volume(3, 5, 2), 30, "volume of 3 & 5 & 2");
  deepEqual(volume(7, 5, 2), 70, "volume of 7 & 5 & 2");
});

test("power", function(){
  deepEqual(power(2,0), 1, "2 raised to the zero power");
  deepEqual(power(2,1), 2, "2 raised to the one power");
  deepEqual(power(2,2), 4, "2 raised to the zero power");
  deepEqual(power(2,3), 8, "2 raised to the zero power");
});

test("greetings", function(){
  deepEqual(greeting("hello", "janet"), "hello, janet!", "saying hello to janet");
});

test("pigLatin", function(){
  deepEqual(pigLatin("hello"), "elloha", "changing hello to pig latin");
});

test("pig greeting", function(){
  deepEqual(pigGreeting("hello", "janet"),"elloha, anetja!", "saying hello to janet in pig-latin")
});

test("pig sentence", function(){
  var sentence = "four score and seven years ago";
  var expected = "ourfa coresa ndaa evensa earsya goaa";

  deepEqual(pigSentence(sentence), expected, "gettysburg first line changed to pig latin");
});






