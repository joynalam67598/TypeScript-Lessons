export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name}`);
    }
}
const marshafi = new Player("marsha", 50, "Ban");
const players = [];
players.push(marshafi);
class Player1 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name}`);
    }
}
const marshafi1 = new Player("marsha", 50, "Ban");
const players1 = [];
players.push(marshafi1);
//# sourceMappingURL=index.js.map