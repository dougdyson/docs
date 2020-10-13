// This reference file has javascript code examples
// ==========================================
// * includes some quokka inline evaluation formating: //?

// ## Functions
// ==========================================

// functional declaration
function declarationIsEven (num){
  return num % 2 === 0;
}

// functional expression
const expressionIsEven = function(num){
  return num % 2 === 0;
}

// ES6 arrow syntax
const arrowMultiIsEven = (num) => {
  return num % 2 === 0;
}

// ES6 single line arrow syntax
const arrowSingleIsEven = (num) => num % 2 === 0;

// used for callbacks
function isEven(num, callback) {  
  callback = declarationIsEven(num);
  return callback;
}

// function tests
declarationIsEven(2); //?
expressionIsEven(2); //?
arrowMultiIsEven(2); //?
arrowSingleIsEven(2); //?
const callback = arrowMultiIsEven(2); //?
isEven(2, callback); //?

// ## Arrays
// ==========================================
const animals = ['Dog', 'Cat', 'Bunny', 'Fish', 'Kitten', 'Cat'];

const numbers = [1, 3, 2, 5, 4];

// # Array properties
// length
animals.length;
// ----------------------------------------

// isArray
Array.isArray(animals);
// ----------------------------------------


// # Array methods
// concat
const newAnimals = ['Hamster', 'Snake'];
const concatAnimals = animals.concat(newAnimals);
// ----------------------------------------


// filter single line arrow syntax, returns a new array
const filteredCats1 = animals.filter((animal) => animal === 'Cat');
// ----------------------------------------


// filter multi line arrow syntax, returns a new array
const isCat = (animal) => animal === 'Cat';
const filteredCats2 = animals.filter(isCat);
// ----------------------------------------


// find, array takes in a function and returns the first value found in the array
const findFirstCat = animals.find(isCat);
// ----------------------------------------


// join, takes an array and returns a string with an optional seperator
const animalParade = animals.join(', ');
// ----------------------------------------


// map, takes an existing array and creates a new one, with each element as an output from a function
const pluralizedAnimals = animals.map(animal => {return animal + 's'})
// ----------------------------------------


// pop, removes and returns the last element of an existing array, mutating the existing array
const lastAnimal = animals.pop();
// ----------------------------------------


// push, returns new index and puts new element at the end of an existing array, mutating the existing array
const newAnimalIndex = animals.push('Mouse');
// ----------------------------------------


// shift, removes and returns the first element of an array, mutating the existing array
const firstAnimal = animals.shift();
// ----------------------------------------


// slice, returns a new array of specified elements in an existing array
const slicedAnimal = animals.slice(2,3);
// ----------------------------------------


// sort, orders elements in an array, mutating the existing array
const numSortAsc = numbers.sort(function(a, b){return a-b});
// ----------------------------------------
const numSortDec = numbers.sort(function(a, b){return b-a});
// ----------------------------------------
const animalSortUp = animals.sort(); 
// ----------------------------------------
const animalSortDown = animals.reverse(); 
// ----------------------------------------


// splice, removes and returns specific elements from an existing array, mutating the existing array
const splicedAnimal = animals.splice(2,1);
// ----------------------------------------


// ## Loops
// ========================================
// loop with callback
for (const num in numbers) {
  const number = numbers[num]; //?
  even = isEven(number); //?
}

// ----------------------------------------
// for i, c-style / traditional
for (let index = 0; index < animals.length; index++) { 
  animals[index]; //?
}

// ----------------------------------------
// for in, for indicies 
for (const index in animals) {
  animals[index]; //?
}

// ----------------------------------------
// for of, can't use on objects
for (const animal of animals) {
  animal; 
}

// ## Conditionals
// List the conditionals
/*
==
===
&&
||
>, <, <=, <=
++, +-
truthyness
ternery

*/

// List the variable types
// Consider testing
/* 
string
number
float
boolean
arrays
objects
*/

// ## Objects
// Define an object
// Show an object with nesting
// spread