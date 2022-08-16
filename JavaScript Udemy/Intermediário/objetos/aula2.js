// defineProperty     definyProperties

function Produto(nome, preco, estoque){
    //this.nome = nome
    //this.preco = preco

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: true, // Pode reescrever o valor
        configurable: true // Pode reconfigurar as propriedades do objeto
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Mostra o valor
            writable: true, // Pode reescrever o valor
            configurable: true // Pode reconfigurar as propriedades do objeto
        },

        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Mostra o valor
            writable: true, // Pode reescrever o valor
            configurable: true // Pode reconfigurar as propriedades do objeto
        },
    })
}

const produto = new Produto('blusa', 100, 1000)
console.log(produto)