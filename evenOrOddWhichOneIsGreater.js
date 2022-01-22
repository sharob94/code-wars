function evenOrOdd(str) {
    let evenSum = 0
    let oddSum = 0
    for(let i = 0; i < str.length; i++){
      if(parseInt(str[i]) % 2 === 0) evenSum += parseInt(str[i])
      else oddSum += parseInt(str[i])
    }
      if(evenSum > oddSum) return "Even is greater than Odd"
      if(oddSum > evenSum) return "Odd is greater than Even"
      if(oddSum == evenSum) return "Even and Odd are the same"
    }ss