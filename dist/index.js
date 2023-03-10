"use strict";
let employee = {
    id: 1,
    name: "TS",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2;
    return parseInt(weight) * 2;
}
kgToLbs(10);
kgToLbs("10kgs");
let textBox = {
    drag: () => { },
    resize: () => { },
};
//# sourceMappingURL=index.js.map