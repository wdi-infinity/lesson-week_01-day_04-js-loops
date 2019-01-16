Problem #1 

for(var i=0; i<=10;i++){
    console.log( i+ " * 9 = " + i * 9) }

Bonus

for(var i=0; i<=10;i++){
    for( var j=i; j<=10;j++){
        console.log(i + " * " + j + " = " + i * j)
    }}

Problem #2 

function assignGrade(Grade){
  
    if(Grade >= 60 && Grade <=69){
      console.log(" your Grade is D ")}
    
    else if (Grade >= 70 && Grade <=79){
      console.log(" your Grade is C ")}
  
    else if (Grade >= 80 && Grade <=89){
      console.log(" your Grade is B ")}
    
   else if (Grade >= 90 && Grade <=100){
      console.log(" your Grade is A ")}
  
   else { console.log(" out of range") }
  }

  Problem #3 

  function golf(par, swing) {
    if (swing === 1) {
        console.log( "Hole in one!");
    }
    else if ((swing - par) <= -2){
         console.log( "Eagle");
    }  
    else if ((swing - par) === -1) {
        console.log( "Birdie");
    }
    else if (swing === par){ 
        console.log( "Par");
    }
    else if ((swing - par) === 1) {
    console.log( "Bogey");
    }
    else if ((swing - par) === 2) {
        console.log( "Double Bogey");
    }

    else {
        console.log( "Not sure");
    }
  }