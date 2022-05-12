var capitals = function (word) {
    console.log(word)
    let array = []
    for (let i = 0; i < word.length; i++) {
        console.log(word[i])
        if (word[i] === word[i].toUpperCase()) {
            array.push(i)
        }

    }
    return array
    // Write your code here
};