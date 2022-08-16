// Reduce
let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor, indice , array){
    acumulador += valor
    return acumulador
})
//console.log(total)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: "Guilherme", idade: 20},
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Leticia' ,idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:67}
  ]

  const pessoaVelha = pessoas.reduce(function(acumulador, obj){
    if(acumulador.idade > obj.idade) return acumulador
    return obj
  })
  console.log(pessoaVelha)