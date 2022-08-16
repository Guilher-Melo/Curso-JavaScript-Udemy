const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Melo'
}
const chave = pessoa['sobrenome']
console.log(pessoa.nome)
console.log(chave)

const caract = new Object()
caract.peso = 65
caract.idade = 20
caract.getAnoNasc = function(){
    const date = new Date
    const dataAtual = date.getFullYear()
    const anoNasc = dataAtual - this.idade
    return anoNasc
}
caract.falaNome = function(){
    console.log (`${pessoa.nome} está falando seu nome`)
}

console.log(caract.peso)
console.log(caract.idade)
caract.falaNome()
console.log(caract.getAnoNasc())