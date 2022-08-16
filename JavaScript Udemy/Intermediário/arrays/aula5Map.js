// Map - sempre mantém a quantidade de elementos no array

//Dobre os números
const numeros = [10, 30, 34, 21, 4, 5, 8, 12, 56, 14, 11]
const numerosDobro = numeros.map(function(valor, indice, array){
    return valor*2
})
//console.log(numerosDobro)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adiciona uma chave id em cada objeto

const pessoas = [
    {nome: "Guilherme", idade: 20},
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Leticia' ,idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:57}
  ] 

  const nomes = pessoas.map(valor=> valor.nome)
  //console.log(nomes)

  const idades = pessoas.map(function(obj){
    const newObj = {...obj}
    delete newObj.nome
    return newObj.idade
  })
  //console.log(idades)
  
  
  const id = pessoas.map(function(obj, indice){
    newObj = {...obj}
    newObj.id = indice
    return newObj
  })
  console.log(pessoas)
  console.log(id)
 

