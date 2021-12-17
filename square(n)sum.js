/*
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.





*/




function squareSum(numbers){

    //used the reduce method which takes in a function and named two params 
    return numbers.reduce(function(sum,n){
        // allows us to do the math needed for the problem 
      return (n*n) + sum
     
    },0)
    
    
    
  }