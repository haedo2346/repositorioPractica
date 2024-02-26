(() => {
  type Avenger = {
    name: string, 
    weapon: string,
  }

  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit"
  }

  const captainAmerica: Avenger = {
    name: "Capitan America",
    weapon: "shield"
  }

  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjhonoir"
  }

  const avengers = [ ironman, thor, captainAmerica]

  for (const avenger of avengers) {
    console.log(avenger)
  }

})()