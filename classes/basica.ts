 (() => {
   class Avenger {

    static avgAge: number = 55;
    static getAvgAge(){
        return this.name
    }

    constructor(
        private name:string, 
        private team: string, 
        public realName?:string | undefined,    
        ){}
    
    bio(){
        return this.realName
    }

   }

   const antMan: Avenger = new Avenger("Antman", "Capitan");
   //console.log(antMan.bio())
 })()
 
 