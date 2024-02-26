(() => {
  let flash: 
  {
    name: string, 
    age: number, 
    powers: string[],
    getNombre?: () => string,
  } 
  = {
    name: "Barry",
    age: 24,
    powers: ["super velocidad", "Viajar en el tiempo"]
  }

 
  let superman: 
  {
    name: string, 
    age: number, 
    powers: string[],
    getNombre?: () => string,
  } 
  = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super fuerza"]
  }


  console.log(flash)

})()