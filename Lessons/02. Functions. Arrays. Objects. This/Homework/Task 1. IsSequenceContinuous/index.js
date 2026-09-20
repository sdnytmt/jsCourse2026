const MIN_LENGTH = 2;

const isSequenceContinuous = (numbers) => {
    if (numbers.length < MIN_LENGTH) {
        return false;
    }

    return numbers.every((num, index) => index === 0 || num - numbers[index - 1] === 1);
};

export default isSequenceContinuous;
