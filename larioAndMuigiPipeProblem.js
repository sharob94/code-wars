function pipeFix(numbers){
  let first = numbers[0]
  let last = numbers[numbers.length-1]
  
  let array = []
  for(let i = first; i<=last; i++){
    array.push(i)
  }    
return array
}