for (let letra of "coder"){
    console.log(letra)
}

const assuntosEcma = ["Map", "Set", "Promise"]

for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: true}]

])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let key of assuntosMap.keys){
    console.log(key)
}
for(let value of assuntosMap.values){
    console.log(value)
}

