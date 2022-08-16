//705.484.450-52

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x    Os 9 primeiros números
10 9  8  7  6  5  4  3  2     Multiplicado pela ordem decrescente
70 0 40 28 48 20 16 15  0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número dígito for maior que 9 consideramos 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x    Adiciona o novo número no final
11 10 9  8  7  6  5  4  3  2     Multiplicado pela ordem decrescente começando do 11
77 0 45 32 56 24 20 20  0  0 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o número dígito for maior que 9 consideramos 0

*/

let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g,'')
let cpfArray = Array.from(cpfLimpo)
let cpfArrayDois = Array.from(cpfLimpo)
//console.log(cpfArray)

function noveDigit (){
    cpfArray.splice(-2, 2)
    return cpfArray
}
/*function arrayParaNum (){
    let stringNum = noveDigit()
    let num = stringNum.map(Number)
    return num
}
*/

function multiplicaNumsUm(){
    let cpfNove = noveDigit()
    let regressivo = cpfNove.length + 1
    let mult = cpfNove.reduce(function(acumulador, valor){
        acumulador += (regressivo * Number(valor))
        regressivo --
        return acumulador
    }, 0)
    return mult
}

function digitoUm (){
    let total = multiplicaNumsUm()
    let digitUm = 11-(total % 11)
    if(digitUm > 9){
        digitUm = 0
    }
    console.log(digitUm)
    return digitUm
}
digitoUm()

function checkDigitoUm(){
    let primDigitoCorreto = digitoUm()
    let primDigito = cpfArray.splice(-2, 1)
    if (primDigito == primDigitoCorreto){
        return true
    } else return false
}
checkDigitoUm()

function dezDigit (){
    let primeNumer = digitoUm()
    cpfArrayDois.splice(-2, 2)
    cpfArrayDois.push(primeNumer)
    console.log(cpfArrayDois)
    return cpfArrayDois
}

dezDigit()



