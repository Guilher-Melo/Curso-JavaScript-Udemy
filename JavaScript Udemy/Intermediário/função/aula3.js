// return - retorna o valor da função
// Encerra a função

/*function soma(a,b){
return a + b
}
console.log(soma(2,3))

function soma2(a,b){           //console.log é diferente de return
    console.log(a+b)
}
soma2(1,1)*/

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }

    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('Mundo!')
console.log(resto)