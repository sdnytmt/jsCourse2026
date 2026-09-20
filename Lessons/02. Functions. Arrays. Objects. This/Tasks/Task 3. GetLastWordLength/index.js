const getLastWordLength = (str) => {
    const words = str.trim().split(' ');

    return words[words.length - 1].length;
};

export default getLastWordLength;
