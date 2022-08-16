// variável arguments guarda todos os argumentos enviados
// não importa se tem algum parâmetro na função, tudo ficará guardado em arguments
//function funcao(a,b,c){
//let total = 0
//for(let argumento of arguments){
  //  total += argumento
//}
//console.log(a,b,c, total)
//}
//funcao(1,2,3,4,5,6,7)

function funcao(a, b=2,c){
    console.log(a+b+c)
}
funcao(5,undefined,1)

function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === "+") acumulador += numero
        if (operador === "-") acumulador -= numero
        if (operador === "/") acumulador /= numero
        if (operador === "*") acumulador *= numero
    }
    console.log(acumulador)
}

conta('+', 0, 10, 20, 2, 4, 7)