//1.
var i = 0;
while (i < 5) {
  console.log("Hello World");
  i++;
}

//2.
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//3.
var i = 4;
while (i >= -16) {
  console.log(i);
  i--;
}

//4.
var i = 8;
while (i <= 41) {
  console.log(i);
  i += 5;
}

//5.
for (var i = 0; i < 5; i++) {
  console.log("Hello World");
}
//Print every number from 0 to 10
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
//Print every number from 4 to -16
for (var i = 4; i >= -16; i--) {
  console.log(i);
}
//
for (var i = 8; i <= 41; i += 5) {
  console.log(i);
}

//6
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log(i + " FizzBuzz");
  else if (i % 3 === 0) console.log(i + " Buzz");
  else if (i % 5 === 0) console.log(i + " Fizz");
}

//7
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " Even");
  } else {
    console.log(i + " Odd");
  }
}

//7
for (var i = 0; i <= 20; i++) {
  i % 2 === 0 ? console.log(i + " is Even") : console.log(i + " is Odd");
}

//8-Multiplication Tables
for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    if (j === 0) console.log("Table of " + i + "...........");
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

//9-The Grade Assigner
function GradeAssigner(testResult) {
  if (testResult > 100) {
    console.log("Test Result is greater than 100!!!");
  } else if (testResult >= 90) {
    console.log(`For ${testResult} you got A`);
  } else if (testResult >= 80) {
    console.log(`For ${testResult} you got B`);
  } else if (testResult >= 70) {
    console.log(`For ${testResult} you got C`);
  } else if (testResult >= 60) {
    console.log(`For ${testResult} you got D`);
  } else if (testResult < 60) {
    console.log(`For ${testResult} you got F`);
  } else {
    console.log("Wrong input");
  }
}

for (var i = 60; i <= 100; i++) {
  GradeAssigner(i);
}

//10-Golf
function golf(par, swings) {
  if (swings === 1) {
    console.log(`Hole in One ..par: ${par} swings: ${swings}`);
  } else if (swings === par) {
    console.log(`par.. par: ${par} swings: ${swings}`);
  } else if (swings === par - 1) {
    console.log(`Birdie.. par: ${par} swings: ${swings}`);
  } else if (swings <= par - 2) {
    console.log(`Eagle.. par: ${par} swings: ${swings}`);
  } else if (swings === par + 1) {
    console.log(`Bogey.. par: ${par} swings: ${swings}`);
  } else if (swings === par + 2) {
    console.log(`Double Bogey.. par: ${par} swings: ${swings}`);
  } else if (swings >= par + 3) {
    console.log(`Not Sure.. par: ${par} swings: ${swings}`);
  }
}

for (var par = 3; par <= 5; par++) {
  for (var swings = 1; swings <= 8; swings++) {
    golf(par, swings);
  }
}
