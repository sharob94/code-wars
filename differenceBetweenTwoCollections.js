/*
https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript


Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]




*/


function diff(a, b){

    // filters out param A to only values that are not included in param B
    const sortedA = a.filter(n=>!b.includes(n))
    // filter out param B to only show vaues that are not included in param A
    const sortedB = b.filter(n=>!a.includes(n))
    // returns a new array with no duplicates and the values from sortedA combined with sorted B sorted
    return [...new Set(sortedA.concat(sortedB))].sort()
    }

    /*ss
    function diff(a,b){
        sortedA = a.filter(n=>!b.includes(n))  
        sortedB =
    }
    
    
    
    */