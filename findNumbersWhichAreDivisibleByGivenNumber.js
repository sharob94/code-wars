/*

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]





*/



function divisibleBy(numbers, divisor) {
    console.log(numbers, divisor)

    let empty = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            empty.push(numbers[i])
        }
    }

    return empty
} ss
  //create a empty array
  // first I would loop through the numbers array 
  // next I would create a condional stating if numbers[i] % divisor === 0 
  // then I would push to the array
  // return array