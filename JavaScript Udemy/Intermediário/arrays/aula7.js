// Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os pares
// -> Reduzir (somar todos)

let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

let pares = numeros.filter(function(valor){
    if(valor % 2 === 0){
        return valor
    }
})

let dobroPares = pares.map(function(valor){
    return valor * 2
})

let soma = dobroPares.reduce(function(acumulador, valor){
    return acumulador += valor
})
console.log(pares)
console.log(dobroPares)
console.log(soma)

