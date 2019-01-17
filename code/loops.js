//Multiplication Tables

for (var i = 0; i < 11; i++){
	console.log(`table of ${i}`);
	for (var n =0; n < 11; n++){
		var multiply = i * n;
    	console.log(`${i} * ${n} = ${multiply}`);
}
}
//Grade Assigner 

function gradeAssigner(grade){
    if (grade <= 100 && grade >=90){
		console.log(`for ${grade} you got an A`);
    } else if (grade < 90 && grade >=80){
        console.log(`for ${grade} you got a B`);
    } else if (grade < 80 && grade >=70){
        console.log(`for ${grade} you got a C`);
    } else if (grade < 70 && grade >=60){
        console.log(`for ${grade} you got a D`);
    } else if (grade < 60){
        console.log(`for ${grade} you got a F`);
    } else { 
        console.log('Please put the right grade');
    }
}

for (var i =60; i <= 100; i++){
    gradeAssigner(i);
}

//Golf

function golf(score,par){
    if (score === 1){
    console.log('Hole in one');
} else if(score <= par - 2){
    console.log('Eagle');
} else if(score === par - 1){
    console.log('Birdie');
} else if(score === par){
    console.log('Par');
} else if(score === par + 1){
    console.log('Bogey');
} else if (score === par + 2){
    console.log('Double Bogey');
} else if (score >= par + 3){
    console.log('Not Sure');
}
}

for (var i =1; i <= 8; i++){
	for (var p =3; p <=5; p++){
    	console.log(golf(i,p));
    }
}