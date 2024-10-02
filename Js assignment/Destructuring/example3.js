// Array Destructuring
let fruits = ['apple', 'banana', 'orange'];

// Destructure the array into individual variables
let [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // 'apple'
console.log(secondFruit); // 'banana'
console.log(thirdFruit);  // 'orange'

// Object Destructuring
let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructure the object into individual variables
let { name, age, city } = person;

console.log(name);  // 'John'
console.log(age);   // 30
console.log(city);  // 'New York'

// You can also rename variables while destructuring
let { name: personName, age: personAge } = person;

console.log(personName);  // 'John'
console.log(personAge);   // 30 
