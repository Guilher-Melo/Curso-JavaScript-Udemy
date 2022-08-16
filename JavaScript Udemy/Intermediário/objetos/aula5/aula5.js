function Pessoa (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeCompleto = () => 'Original' + this.nome + ' ' + this.sobrenome
}

//Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Gui', 'Souza') // <- Pessoa = função construtora
const pessoa2 = new Pessoa ('Luis', 'Marcos') // <- Pessoa = função construtora
const data = new Date() // <-- Date = Função construtora 

console.log(pessoa1)
console.log(pessoa2)
console.log(data)
console.log(pessoa1.nomeCompleto())