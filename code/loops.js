//Multiplication Tables 

for (var i=0;i<=10;i++){
    console.log(i*9);
}

for (var bou =1;bou<=10;bou++){
    for (var i=0;i<=10;i++){
        console.log(i*9);
    }
}

//The Grade Assigner

function assignGrade(grade){
if (grade>90){
    return grade +" A";
}
else if (grade>80){
    return grade+"B";
}
else if (grade>70){
    return grade+"C";
}
else if (grade>65){
    return grade+" D";
} else {
return "F";
}

}
for (var i = 60; i <= 100; i++) {
    console.log( i + ', you got a ' + assignGrade(i));
  }

//Golf

function golfScore(par, swings) {
    if (swings === 1) {
        return "Hole in one!";
    }
    else if ((swings - par) <= -2){
         return 'Eagle';
    }  
    else if ((swings - par) === -1) {
        return 'Birdie';
    }
    else if (swings === par){ 
        return 'Par';
    }
    else if ((swings - par) === 1) {
    return 'Bogey';
    }
    else if ((swings - par) === 2) {
        return 'Double Bogey';
    }
  
    else {
        return 'Not sure!';
    }
  }

//to testing , call the function golfScore( , );


//The Rest

function game(user1, user2){
  if (user1 === user2) {
    return 'TIE'
  } else if (user1 === 'paper' && user2 === 'rock') {
    return 'User1 wins'
  } else if (user1 === 'rock' && user2 === 'scissor') {
    return 'User1 wins'
  } else if (user1 === 'scissor' && user2 === 'paper') {
    return 'User1 wins'
  } else if (user1 === 'rock' && user2 === 'paper') {
    return 'User2 wins'
  } else if (user1 === 'scissor' && user2 === 'rock') {
    return 'User2 wins'
  } else if (user1 === 'paper' && user2 === 'scissor') {
    return 'User2 wins'
  } else {
    return 'Not a tie'
  }
}