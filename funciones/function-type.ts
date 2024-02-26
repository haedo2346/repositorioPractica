(() => {
  const addNumber = (a:number, b:number) => a + b
  const greet = (name: string) => `Hola ${name}`
  const saveTheWorld = () => `El mundo esta a salvo!`
  
  let myFunction: (x:number, y:number) => number

//   myFunction = 10
//   console.log(myFunction)

  myFunction = addNumber
  console.log(myFunction(1,2))

  //myFunction = greet("Lautaro")
  console.log(myFunction)

})()