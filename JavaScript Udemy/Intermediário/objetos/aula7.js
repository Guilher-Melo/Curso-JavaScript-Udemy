// Produto -> aumento, desconto
// Camiseta = Cor , caneca = material

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta


function Caneca (nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camisa = new Camiseta('Lacoste', 200, 'Azul')
camisa.desconto(50)
console.log(camisa)

const caneca = new Caneca('The Office', 70, 'Porcelana')
caneca.aumento(25)
console.log(caneca)