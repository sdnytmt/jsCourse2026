const sumSquareDifference = (num) => {
    let sum = 0;
    let squaresSum = 0;

    for (let i = 1; i <= num; i += 1) {
        sum += i;
        squaresSum += i ** 2;
    }

    return sum ** 2 - squaresSum;
};

export default sumSquareDifference;
