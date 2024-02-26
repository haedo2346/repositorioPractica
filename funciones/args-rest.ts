(() => {
    const fullName = (firstName:string, ...restArgs: string[]):string => {
      return `${firstName}`
    }

    const superman = fullName("Clark", "Joseph", "Kent")

})()