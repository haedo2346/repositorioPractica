(() => {
  abstract class Mutante {
    constructor(
        public name: string,
        public realName: string,
    ){}
  }

  class Xmen extends Mutante{
    salvarMundo(){
        return "Mundo a salvo"
    }
  }
  class Villain extends Mutante{
    conquistarMundo(){
        return "Mundo conquistado"
    }
  }   
    
  const wolverine: Xmen = new Xmen("Wolverine", "Logan")
  const magneto: Villain = new Villain("Magneto", "Magnus")

//   console.log(wolverine.salvarMundo())
//   console.log(magneto)

  const printName = (character: Mutante) => {
    //console.log(character.realName)
  }

  

})()
