// Multiplication Tables

var nder90 = [];
  var up90 = [];
  for(var i = 1; i < nder90.length; i++) {
    mult = nder90[i] * 9 
    for(var j = 1; j < up90.length; j++) {
   console.log(mult);
      
      }
    }


//The Grade Assigner

function assignGrade(Number){
    if( Number >= 60 && Number <= 64){
        console.log(" You got a D ")
    }else if( Number >= 65 && Number <= 69){
        console.log(" You got a D+ ")
    }else if( Number >= 70 && Number <= 74){
        console.log(" You got a C ")
    }else if( Number >= 75 && Number <= 79){
        console.log(" You got a C+ ")
    }else if( Number >= 80 && Number <= 84){
        console.log(" You got a B ")
    }else if( Number >= 85 && Number <= 89){
        console.log(" You got a B+ ")
    }else if( Number >= 90 && Number <= 94){
        console.log(" You got a A ")
    }else if( Number >= 95 && Number <= 100){
        console.log(" You got a A+ ")
    }
}



// # Exercises: if/else if/else statements


function biggest(numOne, numTwo){
    if(numOne > numTwo){
        console.log("The " + numOne + " is biggest")
    }else if (numOne < numTwo){
        console.log("The " + numTwo + " is biggest")
    }else{
        console.log( "The numbers are equal ")
    }
}









// Golf




//The REST 

// #1
function sum(num1 , num2){
    return num1 + num2;
}

//In Loop
for(var i =0; i<=10; i++) {
    console.log (i)
}

// #2

function sub(num1 , num2){
    return num1 - num2;
}
//In Loop
for(var i =10; i>=0; i--) {
    console.log (i)
}

// #3
function divide(num1 , num2){
    return num1 / num2;
}
//In Loop

for(var i =0; i<=10; i++) {
    divide =i / 2
    console.log (divide)
}
// #3

function multiply(num1 , num2){
    return num1 * num2;
}
//In Loop

for(var i =0; i<=10; i++) {
    multiply =i * 2
    console.log (multiply)
}


/////////

