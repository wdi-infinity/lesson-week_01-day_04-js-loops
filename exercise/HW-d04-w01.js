for ( var i = 0 ; i <= 20 ; i++)
{
    if ( i  % 2 === 0 ) 
    {
    console.log( i + 'is even' );
    }
    
    else 
    {  
        console.log( i + 'is even' );

     }
    

}

/////// problem 2

for ( i= 0 ; i <= 10 ;  i++)
{
    var sol = '';
console.log( '9 *'+ i (i * 2 + sol));
}

​
for ( i= 0 ; i <= 10 ;  i++)
{
    var sol = i * 9;
console.log( '9 * '+ i +'='+sol );
}


////////The Grade Assigner
 
for ( i = 60 ; i <= 100 ; i ++)
{
    if ( i >= 60 && i < 70 ) {

        console.log('for '+ i + ' you got D')
    }
    else if ( i >= 70 && i < 80 ) {

        console.log('for '+ i + ' you got C')
    }

    else if ( i >= 80 && i < 90 ) {

        console.log('for '+ i + ' you got B')
    }
    else if ( i >= 90 && i <= 100 ) {

        console.log('for '+ i + ' you got A')
    }
    else { 
        console.log('sorry , you didnt pass')
    }
}