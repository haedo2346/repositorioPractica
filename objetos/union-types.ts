(() => {
    type Hero = 
    {
        name: string, 
        age?: number,
        powers: string[],
        getNombre?: () => string
    }

    let myCustomVariable: (string | number | Hero) = "Fernando"
})()