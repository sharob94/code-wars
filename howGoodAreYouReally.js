function betterThanAverage(classPoints, yourPoints) {
    for (let i = 0; i < classPoints.length; i++) {
        let sum = classPoints.reduce((a, c) => a + c)
        let avg = sum / classPoints.length
        if (avg > yourPoints) {
            return false
        } else {
            return true
        }

    }




}