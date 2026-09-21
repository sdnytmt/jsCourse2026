const getIntersectionUnion = (arrOne, arrTwo) => {
    const intersection = [];
    const union = [];

    for (const num of arrOne) {
        if (arrTwo.includes(num) && !intersection.includes(num)) {
            intersection.push(num);
        }

        if (!union.includes(num)) {
            union.push(num);
        }
    }

    for (const num of arrTwo) {
        if (!union.includes(num)) {
            union.push(num);
        }
    }

    return { intersection, union };
};

export default getIntersectionUnion;
