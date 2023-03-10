// Class
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name}`);
  }
}

const marshafi = new Player("marsha", 50, "Ban");

const players: Player[] = [];

players.push(marshafi);

// Access Modifier

// class Player1 {
//   public name: string;
//   private age: number;
//   readonly country: string;
//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.country = c;
//   }

//   play() {
//     console.log(`${this.name}`);
//   }
// }

//sortcut.
class Player1 {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name}`);
  }
}

const marshafi1 = new Player("marsha", 50, "Ban");

const players1: Player1[] = [];

players.push(marshafi1);
