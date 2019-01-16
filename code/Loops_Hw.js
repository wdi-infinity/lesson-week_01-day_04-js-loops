// 1
function multiplicationTables(){
  for(var i = 0; i<=10; i++){
    console.log(i*9);
  }
}

// 1 "for bonus"
function multiplicationTables(){
  var result = "";
  for (var row = 0; row<=10; row++) {
    result += "1...10 X " + row + " -->  ";
    for (var col = 0; col <=10; col++) {
        result += (col*row) + ' ';
    }
    console.log(result);
    result="";
  }
}

//2.1
function assignGrade(score){
  if(score>=90){
    return "A";
  }else if (score>=80) {
    return "B";
  }else if (score>=70) {
    return "C";
  }else if (score>=60) {
    return "D";
  }else{
    return "F";
  }
}

// 2.2
function gradeAssigner(){
   for(var i = 60; i<=100; i++){
     console.log( "For "+ i +", you got "+ assignGrade(i));
   }
}

// 3
function golf(par){
  for(var i = 1; i<=8; i++){
    if (i == 1){
    console.log( i + " swing - Hole in one!");
  } else if (i <= par -2){
    console.log( i + " swings - Eagle");
  } else if (i == par -1) {
    console.log( i + " swings - Birdie");
  } else if (i == par) {
    console.log( i + " swings - Par!");
  } else if (i == par +1) {
    console.log( i + " swings - Bogey");
  } else if (i == par +2) {
    console.log( i + " swings - Double Bogey");
  }else{
    console.log( i + " swings - Not Sure!");
  }
  }//loop ends here
}
