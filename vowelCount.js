function getCount(str) {
    var vowelsCount = 0;
    str.split('').forEach((letter)=>{
      if (letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'){
        vowelsCount += 1
        
      }
      
    })
    
    
    
  
    // enter your majic here
    
    return vowelsCount;
  }