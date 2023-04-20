let bhaskara = function(a,b,c){
    let delta = (b ** 2) - 4 * a *c
    if(delta > 0){
        let x1 = (- b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        let result = console.log(`${"x = "} ${x1} ${x2}`)
    } else {
        let result = console.log(`${"negative delta"}`)
    }
    return result
}

console.log(bhaskara(1,12,-13))
console.log(bhaskara(3,-5,12))
