// Factory functions e prototypes

const falar = {
    fala(){
        console.log(`${this.nome} está falando`)
    }
}

const beber = {
    bebe(){
        console.log(`${this.nome} está bebendo`)
    }
}

const dormir = {
    dorme(){
        console.log(`${this.nome} está dormindo`)
    }
}

const pessoaPrototype = {...falar, ...beber, ...dormir}


function criaPessoa (nome, sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    })
}

let p1 = criaPessoa('Ana', 'Fernanda')
console.log(p1)