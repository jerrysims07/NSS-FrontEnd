test("Deposit Function", function(){
  deepEqual(deposit(1000, 500),1500, "deposited correctly");
});

test("Withdraw Function", function(){
  deepEqual(withdraw(1000, 500),500, "withdrew correctly");
});
