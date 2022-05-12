function getMissingElement(superImportantArray) {
  let count = 0
  let array = superImportantArray.sort((a, b) => a - b)
  for (let i = 0; i < array.length; i++) {
    if (i === array[i]) {
      count++
    }
  }
  return count
} ss