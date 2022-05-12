function removeDuplicateWords(s) {
  let test = [...new Set(s.split(" "))]
  return test.join(" ")
} ss