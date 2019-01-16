
//Write a function that will get the sum of the numbers between 1 and n and return the answer
function summation(num){
    sum=0;
    for(var i=1 ;i<=num;i++){
        sum+=i;}
    console.log(sum);}
    

    //Write a function to get the average of a group of numbers

    function avg(num){
        var average=0;
        for(var i=0 ;i<num.length;i++){
            average+=num[i];}
        console.log(average/num.length);}



//Write a function to get the sum of all the even numbers in a group

        function summationEven(num){
            sum=0;
            for(var i=1 ;i<=num;i++){
            if (i%2==0){
                sum+=i;}}
            console.log(sum);}


            

            //Write a function to reverse the letters in a word
            function reverseString(str) {
                return str.split("").reverse().join("");
            }




            //    Write a function that takes an array of words and combines them with a dash
            function addDashes(arr){
                var string="";
                for(var i=0 ;i<arr.length;i++){
                string +=arr[i]+"-";}
                console.log(string);}
     
        
                


           //     Function that will count up to a number and back down and return a string of the climb


                function countUpAndDown(num)
{ var string ="";
for (var i=1;i<num; i++){
string+= i+" ";}
for (var i=num;i>=1; i--){
string+= i+" ";}
console.log(string);
}

//Write a function that will tell you all of the words in an array that contain the letter a
function wordsWithA(arr){
    var letterA=[];
           for(var i=0 ;i<arr.length;i++){
    if (arr[i].includes("a")==true){
    letterA.push(arr[i]);}}
    return letterA;}

//Write a function that returns the longest word in sentence
    function longestWord(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length ; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    }

    