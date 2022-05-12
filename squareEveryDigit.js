function squareDigits(num) {
  let answer = []
  let separate = num.toString().split('')
  for (let i = 0; i < separate.length; i++) {
    let parse = parseInt(separate[i])

    let n = Math.pow(parse, 2)

    answer.push(n)
  }
  return parseInt(answer.join(''))
}