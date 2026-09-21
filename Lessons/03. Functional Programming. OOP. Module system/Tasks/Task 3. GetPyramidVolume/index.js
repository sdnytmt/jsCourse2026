class Pyramid {
    constructor(height, baseOne, baseTwo) {
        this.height = height;
        this.baseOne = baseOne;
        this.baseTwo = baseTwo;
    }

    getVolume() {
        const middleBase = Math.sqrt(this.baseOne * this.baseTwo);

        return (this.height / 3) * (this.baseOne + this.baseTwo + middleBase);
    }
}

export default Pyramid;
