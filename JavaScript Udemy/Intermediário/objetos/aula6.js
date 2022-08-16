function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(precentual){
    this.preco = this.preco - (this.preco * (precentual / 100 ))
}

Produto.prototype.aumento = function(precentual){
    this.preco = this.preco + (this.preco * (precentual / 100 ))
}

const p1 = new Produto('perfume', 180)
p1.desconto(10)
//console.log(p1)

// Literal
const p2 = {
    nome: 'Relógio',
    preco: 320
}
Object.setPrototypeOf(p2, Produto.prototype) // Setta o prototype da função Produto no p2
p2.aumento(15)
//console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco:{
        writable: true,
        value: 220,
        configurable: true,
        enumerable: true
    },

    tamanho: {
        value: 'P',
        writable: true,
        configurable: true,
        enumerable: true
    }
})

p3.desconto(10)
console.log(p3)