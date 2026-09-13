const changeCase = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
        const symbol = str[i];
        const upperSymbol = symbol.toUpperCase();

        result += symbol === upperSymbol ? symbol.toLowerCase() : upperSymbol;
    }

    return result;
};

export default changeCase;
