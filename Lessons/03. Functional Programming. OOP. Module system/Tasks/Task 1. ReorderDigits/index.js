const reorderDigits = (type, ...numbers) => {
    const sorted = [...numbers];

    if (type === 'asc') {
        return sorted.sort((a, b) => a - b);
    }

    return sorted.sort((a, b) => b - a);
};

export default reorderDigits;
