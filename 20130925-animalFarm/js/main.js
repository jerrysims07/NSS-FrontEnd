var dogs = [];

var name = prompt("Enter a dog\'s's name or blank to exit:");

while(name)
{
  var dog = {};
  dog.name = name;
  dog.age = parseInt(prompt('Age:'));
  dog.breed = prompt('Breed:');
  dogs.push(dog);
  var name = prompt("Enter a dog\'s's name or blank to exit:");
}


var averageAge=0;
var sumOfAges=0;

for(var i=0;i< dogs.length; i++)
  sumOfAges += dogs[i].age;

averageAge = sumOfAges/dogs.length;

console.log('You have '+ dogs.length +' dogs. The average age is ' +averageAge +'.');