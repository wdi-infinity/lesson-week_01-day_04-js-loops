var counter = 0;
while(counter <= 5)
{

    console.log("Hello, World!");
    counter++;
}


var counter = 0;
while(counter <= 10)
{

    console.log(counter);
    counter++;
}

var counter = 4;
while(counter >= -16)
{

    console.log(counter);
    counter--;
}

var counter = 8;
while(counter <= 41)
{

    console.log(counter);
    counter +=5;
}
/* for loop */
for (var i = 0; i<5;i++)
{
    console.log("Hello, World!");
    

}


for (var i = 0; i<=10;i++)
{
    console.log(i);
    
}

for (var i = 4; i>= -16;i--)
{
    console.log(i);
    
}

for (var i = 8; i<= 41;i +=5 )
{
    console.log(i);
    
}

for (num = 1; num <=100;num++)
{
if (num%3 === 0 && num%5 === 0)
{console.log ( num +'Fizzbuzz');}
else if (num%3 === 0)
{console.log (num +'Fizz');}
else if (num%5 === 0)
     {console.log (num +'Buzz');}
}
