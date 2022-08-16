//               -6       -5      -4       -3          -2        -1
//                0        1       2        3           4         5
const nomes = ['Maria', 'João', 'José', 'Cassandra', 'Paulo', 'Rafaela']

// nomes.splice(índice, quantos delete, adiciona ele1, ele2, ele3)
//pop
//const removidos = nomes.splice(-1, 1)
//console.log(nomes,removidos)

//shift
//const removido = nomes.splice(0, 1)
//console.log(nomes,removido)

//unshift
//nomes.splice(0, 0, 'Fernando')
//console.log(nomes)

//push
//nomes.splice(nomes.length, 0, "Felipe")
//console.log(nomes)

//substituir (em qualquer lugar do array pode substituir, adicionar ou remover)
nomes.splice (3, 1, "Marcos")
console.log(nomes)
