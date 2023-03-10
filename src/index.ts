// type aliases -> to define a single shape of the object
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "TS",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union type - we can give veriable or function peramiter more the one type
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2;
  return parseInt(weight) * 2;
}

kgToLbs(10);
kgToLbs("10kgs");

// intrsection type

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

// combile them in a new type

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal type - to limit the values we use literal type
//Literal (exact, specific)
let quantity: 50 | 100 = 100;

//or

type Quantity = 5 | 10;
let qty: Quantity = 5;

//nullable type -

function greet(name: string | null | undefined) {
  console.log(name?.toUpperCase());
}

greet(null);
