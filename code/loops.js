var i = 0
while(i < 5) {
    console.log("Hello")
    i++
}
var counter = 4
while(counter >= -16) {
    console.log(counter)
    counter--
}

var i = 8
while(i <= 41) {
    console.log(i)
    i += 5
}
for(var i = 0; i < 5; i++) {
    console.log("Hello")
}

for(var i = 0; i <= 10; i++) {
    console.log(i)
}

for(var i = 4; i >= -16; i--) {
    console.log(i)
}

for(var i = 8; i <=41; i +=5) {
    console.log(i)
}

function sum(num) {
    for(var i = 1; i <= num; i++){
        var res = 0
        res = res + i 
        
    }
    console.log(res)
}

for(var i = 1; i <= 100; i++) {
    var msg = ""
    if (i % 3 === 0 ) {
        msg += ' Fizz'
        
    }
    if (i % 5 === 0) {
        msg += ' Buzz'
    }
    console.log(i + msg)
}

for(var i = 0; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i + 'is even')
    } else {
        console.log(i + 'is odd')
    }
}

//Home work

for(var i = 0; i <= 10; i++) {
   console.log(i * 9)
}
// Bonus 
for(var m = 1; m <= 10; m++) {
    for(var i = 0; i <= 10; i++) {
        console.log(i * m)
     }
}

for(var i = 60; i <= 100; i++) {
    if(i < 70) {
        console.log("For " + i + "you got a D")
    } else if(i < 80) {
        console.log("For " + i + "you got a C")
    } else if(i < 90) {
        console.log("For " + i + "you got a B")
    } else if(i < 100) {
        console.log("For " + i + "you got a A")
    }
}

function golfNecknames(par, score) {
    for(var i = 1; i <= 8; i++) {
        if 
    }
}