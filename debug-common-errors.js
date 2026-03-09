/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp
  // This line is missing a closing quotation mark, causing a syntax error.

// What’s Wrong?

//corrected code
console.log("Welcome to the bootcamp");
// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
// The presence of the string "eight" in the array causes a runtime error when trying to multiply it by 2.

for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

//corrected code
let numbers = [2, 4, "eight"];

for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log("Not a number:", numbers[i]);
  }
}

// What’s Wrong?
/*Why this happens

The * operator converts values to numbers.

"eight" cannot be converted into a numeric value.

JavaScript returns NaN (Not a Number) instead of throwing a runtime error.*/


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

/*If a number is divisible by another number (num % i === 0), it means the number is not prime. But the function returns true.

Also, at the end you return false, which would incorrectly mark prime numbers as not prime. */
// What’s Wrong?

//Corrected Code:
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // number is NOT prime
    }
  }

  return true; // number IS prime
}
console.log(isPrime(7)); 