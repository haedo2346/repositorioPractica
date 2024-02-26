"use strict";
(() => {
    let flash = {
        name: "Barry",
        age: 24,
        powers: ["super velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getNombre() { return this.name; }
    };
    console.log(flash);
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: "KYZ SUD",
            city: "Ottawa"
        }
    };
    const client2 = {
        name: "Melissa",
        age: 30
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map