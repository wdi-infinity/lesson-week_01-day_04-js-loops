// 1. print "hello" 5 times, using a while loop 
//while loop
var i =0
while(i<=5){
	console.log('Hello')
i++
}
//for statement
var i = 0
for (i = 0; i<5; i++){
	console.log('hello')
}

//2. print all numbers from 0 to (and including) 10
//while loop

//for statement
var num = "";
for (var i = 0; i<10 ; i++){
	num = i + 1;
console.log(num);
}

//3. Using while loop, print all numbers from 4 -16
//while loop 
var num = 4
while (num >= -16){
	
	console.log(num)
	num--;
}
//for statement
var num = 4 
for (num = 4; num >=-16; num--){
	console.log(num)
num--
}
//4. Using a while loop, print every FIFTH number (going from 8 to 41)
//while loop
var i=8;
while (i <=41){
console.log(i)
i +=5;
}
//for statement
for(i = 8; i <= 41, i += 5){
	console.log(i);
}

//the classic fizzbuzz program
//for every number between 1 & 100...
//if the number is evenly divided by 3, print "fizz"
//if the number is evenly divided by 3, print "buzz"
//if the number is evenly divided by 3 AND 5 print "fizzbuzz"
var num = 1;
for (num = 1; num <= 100 ; num++){
	if (num%3===0 && num%5!== 0){
		console.log(num + " FIZZ");
    }

	else if (num%3!==0 && num%5=== 0){
		console.log(num + " BUZZ");
    }
	
    else if (num%3===0 && num%5=== 0){
		console.log(num + " FIZZ-BUZZ");
    }

    else {
		console.log(num + " Not divisible by either 3 or 5")
    }
}

//the Grade assigner
function grade(i){
	if (i>=90 && i<=100){
		console.log("A");
    }
	else if (i>=80 && i <=89){
		console.log("B");
    }
	else if (i>70 && i <=79){
		console.log("C");
    }
	else if (i>60 && i <=69){
		console.log("D");
    } 

	else { console.log("F");}
	}

//	