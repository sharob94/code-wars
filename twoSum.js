function twoSum(numbers, target) {
    let answer = []
    console.log(numbers, target)
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            console.log(numbers[i], numbers[j])
            if (numbers[i] + numbers[j] === target) {
                answer.push(i, j)
                console.log(answer, "answer")
            }

        }

    }
    return answer
}