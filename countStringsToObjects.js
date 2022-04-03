function strCount(obj) {
  let count = 0
  for (let key in obj) {
    if (typeof obj[key] === 'string') count++
    else count += strCount(obj[key])
  }
  return count
}