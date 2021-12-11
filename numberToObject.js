function numObj(s){
  let arr = []
  
  for (let i = 0; i < s.length; i++){
    let obj = {}
    let letter = s[i].toString()
    obj[letter] = String.fromCharCode(s[i])
    console.log(obj, 'object')
    arr.push(obj)
  }
  console.log(arr, 'array with nums and letters')
  return arr
}

//returning an array => making an empty one to begin with and construct in the loop
//loop in the s array