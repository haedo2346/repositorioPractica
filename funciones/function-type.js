"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta a salvo!`;
    let myFunction;
    //   myFunction = 10
    //   console.log(myFunction)
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet("Lautaro");
    console.log(myFunction);
})();
