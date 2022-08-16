//Filter -> sempre retorna um array com o mesmo número de elementos ou menos.

// Retorne os números maiores que 10
let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Código composto
/*function callbackFilter(valor, indice, array){
    if (valor>10){
        return true
    } else{
        return false
    }
}
*/

/*function callbackFilter(valor){     // Código simplificado 
    return valor > 10
}
const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)
*/

const numerosFiltrados = numeros.filter(valor => valor > 10)  // arrow function
//console.log(numerosFiltrados)   


// Retorne as pessoas com nome maior que 5 letras
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'
  const pessoas = [
    {nome: "Guilherme", idade: 20},
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Leticia' ,idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:57}
  ]   

  const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >=5)
  console.log(pessoasComNomeGrande)

  const maior50 = pessoas.filter(valor => valor.idade > 50)
  console.log(maior50)

  const terminacomA = pessoas.filter(function(valor){
    return valor.nome.toLowerCase().endsWith('a')
  })
  console.log(terminacomA)
