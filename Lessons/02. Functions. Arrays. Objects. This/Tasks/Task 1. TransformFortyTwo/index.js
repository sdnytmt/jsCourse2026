const CHECK_NUM = 42;

const transformFortyTwo = (arr) => arr.map(num => (num % CHECK_NUM === 0 ? 'forty two!' : num));

export default transformFortyTwo;
