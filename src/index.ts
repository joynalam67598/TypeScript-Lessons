// TS Built-in Type: any, unknown, never, enum, tuple.
function calculateTax(income: number, taxYear = 2022): number /*return type*/ {
  if (income < 50_000 && taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2021);
calculateTax(10_000);

// object

//let employee = { id: 1 };
// In js object is dynamic thier shape can change any time but its not valid in Typescript.
//employee.name = "TS" // not valid in TS

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "TS",
  retire: (date: Date) => {
    console.log(date);
  },
};
