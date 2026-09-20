const BOOMERANG_SIZE = 3;

const getBoomerangsCount = (numbers) => {
    let count = 0;

    for (let i = 0; i + BOOMERANG_SIZE <= numbers.length; i += 1) {
        const [first, middle, last] = numbers.slice(i, i + BOOMERANG_SIZE);

        if (first === last && first !== middle) {
            count += 1;
        }
    }

    return count;
};

export default getBoomerangsCount;
