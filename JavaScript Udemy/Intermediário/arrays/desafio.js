function numeroAleatorio(){
let aleatorio = Math.round(Math.random() *(100-1) + 1)
return aleatorio
}

function criaArray(){
let numeros = []
let contador = 0
while (contador < 30){
    numeros.push(numeroAleatorio())
    contador++
}
return numeros
}

const isPrime = (num) => {
    for(let i = 2; i <num; i++)
    if(num % i ===0) return false;
    return num>1
}

function arrayPrimo(){
    let numeros = criaArray()
    let primos = []
    console.log(numeros)
   let arrayPrim = numeros.filter(function(valor){
        if(isPrime(valor) === true){
            primos.push(valor)
        }
    })
    return primos
}

function somaPrimo (){
    let numPrimos = arrayPrimo()
    console.log(numPrimos)
    let somaPrimos = numPrimos.reduce(function(acumulador, valor){
       return acumulador += valor
    })
    return somaPrimos
}

console.log(somaPrimo())




