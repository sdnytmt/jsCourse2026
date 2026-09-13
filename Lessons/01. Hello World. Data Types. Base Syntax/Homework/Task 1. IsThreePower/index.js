const THREE = 3;

const isThreePower = (num) => {
    if (num < 1) {
        return false;
    }

    let rest = num;

    while (rest % THREE === 0) {
        rest /= THREE;
    }

    return rest === 1;
};

export default isThreePower;
