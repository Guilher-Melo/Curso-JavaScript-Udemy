/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, prop)
... (spread)

Já vimos

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: "Coisa", preco: 20}
const outroProduto = {... produto, material: 'plástico'} // Spread (...) para copiar outro objeto
outroProduto.nome = 'Embalagem'
//console.log(produto)
//console.log(outroProduto)
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // Retorna propriedades do objeto

console.log(Object.values(outroProduto)) //Retorna apenas os valores
console.log(Object.entries(outroProduto)) //Retorna arrays com chave e valor