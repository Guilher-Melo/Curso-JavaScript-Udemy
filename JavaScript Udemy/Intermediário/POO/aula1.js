// Criando classes
class Pessoa {
    constructor(nome, sobrenome){ // constructor seria onde os parâmetros iriam em uma função
        this.nome = nome
        this.sobrenome = sobrenome
    } 

    falar(){
        console.log(`${this.nome} está falando`)
    }

    cantar(){
        console.log(`${this.nome} está cantando`)
    }

    chorar(){
        console.log(`${this.nome} está chorando`)
    }
}

const p1 = new Pessoa('Alex', 'Clodovaldo')
console.log(p1.chorar())