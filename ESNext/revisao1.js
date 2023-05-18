// let e const 

{
    var a = 2
    var b = 3
    console.log(b)
}
console.log(a)

// template String 

const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring 

const [l, e, ...trans] = "Cod3er"
console.log(l,e,trans)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: 'ana', idade: 9}
console.log(idade, nome)