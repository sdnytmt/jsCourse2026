class CityGame {
    constructor(firstPlayer, secondPlayer) {
        this.players = [firstPlayer, secondPlayer];
        this.cities = [];
        this.winner = null;
    }

    restart() {
        this.cities = [];
        this.winner = null;

        return 'The game has been restarted!';
    }

    isMoveValid(city) {
        if (this.cities.includes(city)) {
            return false;
        }

        if (this.cities.length === 0) {
            return true;
        }

        const previousCity = this.cities[this.cities.length - 1];
        const lastLetter = previousCity[previousCity.length - 1];

        return lastLetter.toLowerCase() === city[0].toLowerCase();
    }

    play(city) {
        if (this.winner === null && !this.isMoveValid(city)) {
            if (this.cities.length % 2 === 0) {
                this.winner = this.players[1];
            } else {
                this.winner = this.players[0];
            }
        }

        if (this.winner !== null) {
            return `Game over! The winner is ${this.winner}`;
        }

        this.cities.push(city);

        return [...this.cities];
    }
}

export default CityGame;
