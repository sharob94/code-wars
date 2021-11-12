/* 
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

given: const areaOrPerimeter = function(l , w)

*/

const areaOrPerimeter = function(l , w) {
    if (l===w){
      return l*w
    }else{
      return l + w + l + w
    }
    
  };


  /*
  
  So the parameters that I would have are length and width
  square than I will return a l*w || rectangele than I will return the perimeter which be adding all 4 sides which a pair being equal to each other 
  (3,3)=> 9
  (4,5)=> 18
  conditonal if l and w are equal to each other than return l*w
  if l*w is not equal to each other than return l+l+w+w


  
  
  
  */