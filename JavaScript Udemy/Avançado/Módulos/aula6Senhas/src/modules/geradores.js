function rand (min, max){
   return Math.floor(Math.random() * (max - min) + min)
}
const geraMaiuscula = () => {
    return String.fromCharCode(rand (65, 91))
}

function geraMinuscula(){
    return String.fromCharCode(rand (97, 123))
}

function geraNumero(){
    return String.fromCharCode(rand (48, 58))
}

const simbolos = '!@#$%¨&*()_-+=§<>;:.,°/'

function geraSimbolos(){
    return simbolos[rand(0, simbolos.length)]
}

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
const senhaArray = []
qtd = Number(qtd)

for (let i = 0; i < qtd; i++){
    maiusculas && senhaArray.push(geraMaiuscula())
    minusculas && senhaArray.push(geraMinuscula())
    numeros && senhaArray.push(geraNumero())
    simbolos && senhaArray.push(geraSimbolos())
}

    return senhaArray.join('').slice(0, qtd)
}