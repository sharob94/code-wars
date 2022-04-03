function scoreboard(string) {
  let obj = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4,
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8,
    'nine': 9, 'nil': 0
  }

  let arr = []
  let words = string.split(" ")
  for (let i = 0; i < words.length; i++) {
    for (let voice in obj) {
      if (words[i].includes(voice)) {
        arr.push(obj[voice])
      }
    }
  }
  return arr
}