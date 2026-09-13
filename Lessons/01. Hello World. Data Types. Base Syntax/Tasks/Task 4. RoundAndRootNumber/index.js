// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
    if (num < 0) {
        return 'error';
    }

    const root = Math.sqrt(num);

    return String(Math.floor(root * ROUNDING_DEGREE) / ROUNDING_DEGREE);
};

export default roundAndRootNumber;
