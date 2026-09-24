class CarBrand {
    constructor(brand, model, power, acceleration) {
        this.brand = brand;
        this.model = model;
        this.power = power;
        this.acceleration = acceleration;
    }

    runDrag(time) {
        return `${this.brand} ${this.model} runs drag for ${time} seconds`;
    }

    getWhoIsFaster(car) {
        let faster = this;

        if (car.acceleration < this.acceleration) {
            faster = car;
        }

        const difference = Math.abs(this.acceleration - car.acceleration);

        return `${faster.brand} ${faster.model} is faster for ${difference} seconds`;
    }
}

export default CarBrand;
