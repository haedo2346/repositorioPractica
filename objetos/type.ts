(() => {

    type Hero = 
    {
        name: string, 
        age?: number,
        powers: string[],
        getNombre?: () => string
    }

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
  
   
    let superman: Hero
    = {
      name: "Clark Kent",
      age: 60,
      powers: ["Super fuerza"],
      getNombre(){return this.name}
    }
  
  
    console.log(flash)
  
  })()