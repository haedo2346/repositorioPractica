// Crear interfaces

interface IAutomovil{
  encender: boolean,
  velocidadMaxima: number,
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: IAutomovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: IAutomovil = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface IJoker {
  reir: boolean,
  comer: boolean,
  llorar: boolean,
}

const guason: IJoker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: IJoker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface IGotham{(ciudadanos: string[]):number}

const ciudadGotica: IGotham = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface IPersona{
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio():void
}

class Persona implements IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  constructor(
    nombre: string,
    edad: number,
    sexo: string,
    estadoCivil: string,
  ){
    this.nombre = nombre,
    this.edad = edad,
    this.sexo = sexo,
    this.estadoCivil = estadoCivil
  }
  imprimirBio(){
    console.log("Esta es mi bio")
  }
}

const lautaro: Persona = new Persona("Lautaro", 26, "Masculino", "Soltero")
console.log(lautaro)
lautaro.imprimirBio()