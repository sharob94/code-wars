var Calculator = {
    average: function(...nums) {
     if(nums.length == 0) return 0
     return nums.reduce((a,b)=> a+b ) / nums.length
    }
   };