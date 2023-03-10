// const addId = (obj: object) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// normally genric na hole object ta te ki ache ta typescript jane na, tai genric use korte hoy.

// const addId = <T>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// but is tish way we can pass any type of data like: addId("name");
// to fix this we can specify the type

// const addId = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// more specifically


const addId = <T extends {
  name: string,
  age: number,
}>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};


let user = addId({
  name: "mash",
  age: 40,
});

// normally genric na hole object ta te ki ache ta typescript jane na 







// - -------------------------------

// generices in interface;
