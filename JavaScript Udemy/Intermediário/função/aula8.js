// Função construtora -> constrói objetos
// Função fábrica -> fabrica objetos
// Construtora -> começa com maiúscula. Exemplo: Pessoa (new)

function Pessoa (nome,sobrenome){
    // Atributos ou métodos privados
    const ID = 123456
    const metodoInterno = function (){

    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(`sou um método`)
    }
}

let p1 = new Pessoa('Guilherme', 'Souza')
let p2 = new Pessoa('Billie', 'Eilish')

console.log(p2.nome, p2.sobrenome)
p1.metodo()