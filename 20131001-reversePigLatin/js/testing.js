test("pig latin", function(){
  deepEqual(toPig("hello"),"elloha");
});

test("flip & reverse array", function(){
  deepEqual(flipAndReverse("this, is, an, array"), "rrayaa; naa; sia; hista");
});