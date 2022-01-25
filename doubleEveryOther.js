
/*

Write a function that doubles every second integer in a list, starting from the left.

Example:

doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]


*/

function doubleEveryOther(a) {
    console.log(a, 'arr')
    for (let i = 1; i < a.length; i+=2){
        a[i] *= 2
      }
    return a
  }ssss