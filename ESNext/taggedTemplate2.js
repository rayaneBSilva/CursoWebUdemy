function real(partes, ... valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNan(valor) ? valor: `R$${valor.toFixed(2)}`
        resultadp.push(partes[indice],valor)
    })
    return resultado.join('')

}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)