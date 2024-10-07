// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  const strRev = str.split("").reverse().join("");
  console.log(strRev);
}

reverseString("strong");

// Count Characters: Create a function that counts the number of characters in a string.
const THESTRING = "THESTRING";
function count() {
  var lenght = THESTRING.length;

  console.log(lenght);
}
count();

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
const Capital = "capital";
console.log(Capital.toUpperCase());

//Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMin(arry = [1, 4, 6, 8, 9, 4, 5]) {
  console.log(Math.min(...arry)); // Spread the array elements
}

findMin();

function findMax(arry = [1, 4, 6, 8, 9, 4, 5]) {
  console.log(Math.max(...arry)); // Spread the array elements
}

findMax();
// Output: 1

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.

const foodstate = [
  {
    name: "Emmanuel",
    State: "Abuja",
    food: "rice",
  },
  {
    name: "Philip",
    State: "Edo",
    food: "beans",
  },
  {
    name: "James",
    State: "Ondo",
    food: "sparg",
  },
  {
    name: "Auther",
    State: "Kano",
    food: "Plantain",
  },
];

const foodtoEat = foodstate.filter((item) => item.food === "beans");
console.log(foodtoEat);

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers"; // Handle negative numbers
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

function fibonacci(n) {
  let fibSequence = [0, 1];

  if (n <= 0) return [];
  if (n === 1) return [0];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextNumber);
  }

  return fibSequence;
}
console.log(fibonacci(10));

// <!-- What You're Aiming For

// Time for writing code !

// Below the  instructions to follow to write some functions with JavaScript.

// Do your best and share your work with your instructor !

// Instructions

// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
// Count Characters: Create a function that counts the number of characters in a string.
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// Sum of Array: Create a function that calculates the sum of all elements in an array.
// Filter Array: Implement a function that filters out elements from an array based on a given condition.
// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
// Prime Number Check: Create a function to check if a number is prime or not.
// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

// Link Submission -->
