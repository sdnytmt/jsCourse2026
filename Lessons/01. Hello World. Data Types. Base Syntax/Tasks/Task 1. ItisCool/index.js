const ITIS_DIVIDER = 3;
const COOL_DIVIDER = 5;

const itisCool = (begin, end) => {
    for (let num = begin; num <= end; num += 1) {
        const isItis = num % ITIS_DIVIDER === 0;
        const isCool = num % COOL_DIVIDER === 0;

        if (isItis && isCool) {
            console.log('ItisCool');
        } else if (isItis) {
            console.log('Itis');
        } else if (isCool) {
            console.log('Cool');
        } else {
            console.log(num);
        }
    }
};

export default itisCool;
