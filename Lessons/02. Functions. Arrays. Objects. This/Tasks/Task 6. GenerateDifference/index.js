// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const generateDifference = (objOne, objTwo) => {
    const copyOne = getCopy(objOne);
    const copyTwo = getCopy(objTwo);
    const keys = onlyUnique([...Object.keys(copyOne), ...Object.keys(copyTwo)]);

    return keys.reduce((acc, key) => {
        if (!Object.hasOwn(copyOne, key)) {
            acc[key] = 'added';
        } else if (!Object.hasOwn(copyTwo, key)) {
            acc[key] = 'deleted';
        } else {
            const isSame = JSON.stringify(copyOne[key]) === JSON.stringify(copyTwo[key]);

            acc[key] = isSame ? 'unchanged' : 'changed';
        }

        return acc;
    }, {});
};

export default generateDifference;
