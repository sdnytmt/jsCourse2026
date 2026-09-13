const isTicketHappy = (numStr) => {
    const half = numStr.length / 2;
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < half; i += 1) {
        firstSum += Number(numStr[i]);
        secondSum += Number(numStr[half + i]);
    }

    return firstSum === secondSum;
};

export default isTicketHappy;
