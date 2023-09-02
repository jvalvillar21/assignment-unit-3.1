console.log('****** Array Practice *******');

// Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1. TODO: Make an array `favoriteFoods` with some favorite foods
//    Console log your array of foods to the console with a message, 
//    similar to the example above
let favoriteFoods = ['pasta', 'pizza', 'burger', 'tacos']
console.log('My favorite foods are: ', favoriteFoods);

// Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
let numberOfAnimals = animalArray.length
console.log('Number of animals:', numberOfAnimals);

// 2. TODO: Create a variable `numberOfFoods`
//    Console log to the console the number of foods
let numberOfFoods =favoriteFoods.length
console.log('Number of Foods:', numberOfFoods);

// Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
let firstAnimal = animalArray[0];
console.log('First animal is', firstAnimal);

// 3.a. TODO: Create a variable `secondAnimal`
//      Console log the second animal in the array 
let secondAnimal = animalArray[1]
console.log('Second animal is', secondAnimal);

// 3.b. TODO: Create a variable `lastAnimal`
//      Console log the last animal in the array using it's array index 
let lastAnimal = animalArray[3]
console.log('last animal is', lastAnimal);
// 3.c. (STRETCH) TODO: Update 3.b to use the array length, 
//      instead of the exact index number of the last item.



// Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
let animalToPush = 'penguin';
animalArray.push(animalToPush);
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Create a variable `dessert` and assign it to a new food.
//      Add the `dessert` at the end of your array & log the array
let dessert = 'pie';
favoriteFoods.push('pie');
console.log('Added a dessert to end,' , favoriteFoods);


// Example: Add an animal to the beginning using Array.unshift
let animalToUnshift = 'walrus';
animalArray.unshift(animalToUnshift);
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.b. TODO: Create a variable `entree` and assign it to a new food.
//      Add the `entree` at the beginning of the array & log the array

let entree = 'steak';
favoriteFoods.unshift(entree);
console.log(`Added an entree to beginning: ${favoriteFoods}`);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// NOTE: Use the `colors` array for 4.c and 4.d.
let colors = ['orange', 'yellow', 'green', 'teal'];

// 4.c. TODO: Create a variable `lastColor`. Remove the color 
//      at the end of your array & assign it to `lastColor`.
//      Console log both the color removed and the updated array.

let lastColor = colors.pop();
console.log('Removed the last color' , lastColor);
console.log('The colors are now' , colors);

// Example: Remove the first color using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d. TODO: Create a variable `firstColor`. Remove the color 
//      at the beginning of your array & assign it to `firstColor`.
//      Console log both the color removed and the updated array.

let firstColor = colors.shift();
console.log('Removed the first color', colors);
console.log('The colors are now' , colors);
// STRETCH GOALS:

let gems = ['Topaz', 'Citrine', 'Diamond', 'Emerald', 'Iolite', 'Tanzanite'];

// 5.a (STRETCH) TODO: Replace the second gem with 'Tourmaline'
//      Console log the updated array.


// 5.b (STRETCH) TODO: Sort your gems array
//     in reverse alphabetical order.
//     Console log the array.


// 5.c (STRETCH) TODO: Create a variable `gemString` and
//     put the word "and" between each item. Research `.join()`.
//     eg "Tourmaline and Topaz and Tanzanite and Iolite and Emerald and Diamond".
//     Console log the string.


// 5.d (STRETCH) TODO: Make a new array `colorfulGems` that combines 
//     the gems array with the colors array.
//     Console log the new array.
//     It should look something like:
//     ['Tourmaline', 'Topaz', 'Tanzanite', 'Iolite', 'Emerald', 'Diamond', 'yellow', 'green']





// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    favoriteFoods: typeof favoriteFoods !== 'undefined' ? favoriteFoods : undefined,
    numberOfFoods: typeof numberOfFoods !== 'undefined' ? numberOfFoods : undefined,
    secondAnimal: typeof secondAnimal !== 'undefined' ? secondAnimal : undefined,
    lastAnimal: typeof lastAnimal !== 'undefined' ? lastAnimal : undefined,
    dessert: typeof dessert !== 'undefined' ? dessert : undefined,
    entree: typeof entree !== 'undefined' ? entree : undefined,
    lastColor: typeof lastColor !== 'undefined' ? lastColor : undefined,
    firstColor: typeof firstColor !== 'undefined' ? firstColor : undefined,
    gems: typeof gems !== 'undefined' ? gems : undefined,
    gemString: typeof gemString !== 'undefined' ? gemString : undefined,
    colorfulGems: typeof colorfulGems !== 'undefined' ? colorfulGems : undefined,
    colors: typeof colors !== 'undefined' ? colors : undefined,
  };
} catch (e) {
  // Do nothing
}