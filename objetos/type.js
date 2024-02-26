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
