let pessoa = {
    Nome: 'Guilherme', sobrenome: 'Melo', idade: 20, endereco:{
        Rua:"Epslon", numero: 222
    }
}

//Atribuição via desestruturação 

let {Nome, sobrenome} = pessoa // cria variável com mesmo nome do objeto
console.log(Nome, sobrenome)

let {endereco:{Rua: r, numero} } = pessoa // puxar o objeto(nome e depois dois pontos) e criar uma variável
console.log(r, numero)
