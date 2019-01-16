// WHILE LOOP ONLY!
// 1. Print "Hello, World!" 5 times, using a while loop
var counter = 0;
while (counter < 5) {
  console.log("Hello, World!");
  counter++;
}

// 2. Print all numbers from 0 to (and including) 10
var counter = 0;
while (counter <= 10) {
  console.log(counter);
  counter++;
}
// 3. Using while loop, print all numbers from 4 to -16
var counter = 4;
while (counter > -17) {
  console.log(counter);
  counter--;
}
// 4. Using while loop, print every FIFTH number (going from 8 to 41)
// 8, 13, 18, ...38
var counter = 8;
while (counter <= 41) {
  console.log(counter);
  counter += 5;
}

// FOR LOOP ONLY!
// 1. Print "Hello, World!" 5 times, using a for loop
for (var i = 0; i < 5; i++) {
  console.log("Hello, World!");
}

// 2. Print all numbers from 0 to (and including) 10
for (var number = 0; number <= 10; number++) {
  console.log(number);
}

// 3. Using for loop, print all numbers from 4 to -16
for (var number = 4; number >= -16; number--) {
  console.log(number);
}

// 4. Using for loop, print every FIFTH number (going from 8 to 41)
// 8, 13, 18, ...38
for (var number = 8; number <= 41; number += 5) {
  console.log(number);
}

// The classic Fizzbuzz Program
// For every number between 1 and 100...
// If the number is evenly divisible by 3, print "3 Fizz"
// If the number is evenly divisible by 5, print "5,10,15.. Buzz"
// If the number is evenly divisible by 3 AND evenly divisible by 5, print "15,30,60 Fizzbuzz"

// BONUS
// Use ONLY ONE console.log
for (var i = 1; i <= 100; i++) {
  var string = "";
  if (i % 3 === 0) {
    string += "Fizz";
  }
  if (i % 5 === 0) {
    string += "Buzz";
  }
  if (string !== "") {
    console.log(i + string);
  }
}


// The even / odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen(e.g. "2 is even", "1 is odd.").
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }

  // OR
  // condition ? if true : if false
  i % 2 === 0 ? console.log(i + " is even.") : console.log(i + " is even.");
}




// Hello there, this is so cool
// Hello there, this is so cool
// Hello there, this is so cool
// Hello there, this is so cool
// Hello there, this is so cool
// Hello there, this is so cool
// Hello there, this is so cool
// Hello there, this is so cool