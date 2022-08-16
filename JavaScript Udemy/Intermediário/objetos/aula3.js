function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Mostra a chave
        configurable: true, // Pode reconfigurar as propriedades do objeto
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if ( typeof valor !== "number"){
                throw new TypeError('Mensagem de erro')
            }
            estoquePrivado = valor
        }
    })
}

const produto = new Produto('blusa', 100, 1000)
console.log(produto)
produto.estoque = 100
console.log(produto.estoque)