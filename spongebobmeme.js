function spongeMeme(sentence) {
  sentence = sentence.toLowerCase()
  let answer = ""
  for (let i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) answer += sentence[i].toUpperCase()
    else answer += sentence[i].toLowerCase()
  }
  console.log(answer)
  return answer
} sss