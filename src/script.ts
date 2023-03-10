import { isPlayer } from "./interfaces/isPlayer";

export class Player implements isPlayer {
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
let marshafi: isPlayer;
marshafi = new Player("marsha", 50, "Ban");

const players: Player[] = [];

players.push(marshafi);

//----------------------------

// function drawRactengle(options: { width: number; length: number }) {
//   let width = options.width;
//   let length = options.length;
// }

// drawRactengle({
//   width: 30,
//   length: 34,
// });

interface RectangleOptions {
  width: number;
  length: number;
}

function drawRactengle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

// drawRactengle({
//   width: 30,
//   length: 34,
//   height: 50,
// });
// this will cause error. but if we pass a reference of a veriable ts just check for the required prerameters,
// if perameters are ok then what else we are sending with dosen't take into connt

let threeOptions = {
  width: 30,
  length: 34,
  height: 50,
};
drawRactengle(threeOptions); // just pass the reference of the veriable threeOptions
