function highestRank(arr) {
  let counter = {}
  //occurrance is the value, and the nums are the keys of the object
  //what i want to say is to assign the object keys, then 
  // see if the occurance keys exist then increment the count or return 1 

  arr.map(occurance => counter[occurance] = counter[occurance] ? counter[occurance] + 1 : 1)
  let count = 0
  let highestRank = 0

  for (let num in counter) {
    num = num * 1
    if (counter[num] >= count) {
      count = counter[num]
      highestRank = num
    }
  }
  console.log(highestRank, 'maybe this will be right, it should return 9')
  console.log(counter, 'counter')
  console.log(Object.entries(counter), 'look here')
  return highestRank


}