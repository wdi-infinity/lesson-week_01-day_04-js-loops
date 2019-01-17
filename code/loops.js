

// Multiplication Tables //
for(var i = 0 ; i<=10 ; i++) {
	var result; 
	result = i*9;
	console.log(i + " x 9 = " + result);
}


//Multiplication Tables with the Bonus //
for(var i = 1 ; i<=10 ; i++) {
	for( var j = 1 ; j<=10 ; j++){	
	  console.log(i + " x " + j + " = " + (i*j))
    }}


// The Grade Assigner //


for(var i = 60 ; i<= 100 ; i++){
    var grade = "";
     if (i <= 60){
      grade = "Grade : F";      
       } 
     else if (i < 70) {
      grade = "Grade : D"; 
               } 
     else if (i < 80) 
          {
       grade ="Grade : C"; 
     } else if (i < 90) {
       grade ="Grade : B"; 
     } else if (i <= 100) {
       grade = "Grade : A"; 
}
     console.log(grade);
}

// Golf //

function golf(par,swings){
    if( swings === par ){
        return "Par";}
    else if (swings === (par-1)){
        return "Birdie";}
    else if (swings <= par - 2){
        return "Eagle";}
    else if (swings === 1){
         return "Hole in One";}
    else if(swings === par+1){
         return "Bogey";}
    else if (swings === par+2){
          return "Double";}
    else if (swings >= par+3){
         return"Not Sure";}}

// Driving Age //

for (var i = 9 ; i<20 ; i++ ){
	var result = "";
	if(i<18){
    result = "Sorry, you can't drive yet and wait "+ (18-i) + " years";}
    if (i>=18){
    result = "Drive away";}
   console.log(result);
}

//or 
var age = 10 ; 
while(age<20){
var result = ""
 if(age<18){
  result = "Sorry, you can't drive yet and wait "+ (18-age) + " years";}
 else if (age>=18){
	result = "Drive away";}
console.log(result);
age ++;}

// The World Translator //

for(var i = 0 ; i<=2 ; i++){
    var result = "";
    if(i === 0 ) {
        result = "مرحبا بالعالم";
    }
    else if (i === 1) {
        result = "Hello World";
    }
    else if (i === 2) {
        result = "bonjour"; 
    }
    console.log(result);
}