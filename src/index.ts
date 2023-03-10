// TS Built-in Type: any, unknown, never, enum, tuple.
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is _published: boolean = true;
// In TS we don't need always anotate veriable like this TS can detect the type of the veriable from its first declaration.
let level; // what about this?
// this is "any" type variable like var. we can assigne any type of data to this later. but its not the best prectice.

//Array
let numbers = []; // -> any type
let nums: number[] = []; //-> number

// tuple
let user: [number, string] = [1, 'TS']

//enum
enum Size {Small = 1, Medium, Large}; // based on the first member value other value will be assigned automatically.
// const enum Size3 {Small = 1, Medium, Large}; 
// we can use const to generate more optimized code in js
