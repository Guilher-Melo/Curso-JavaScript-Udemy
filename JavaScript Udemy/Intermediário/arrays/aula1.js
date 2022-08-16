//Valor por referência

const nomes = ['Edu', 'Fernanda', 'Kelvins', 'Alex', 'Raul', 'Luiza']
//const removido = nomes.pop()  // pop retira o último elemento e shift retira o primeiro e desloca os outros elementos
//console.log(nomes,removido)
//nomes.push('Jaur')
//console.log(nomes) //push adiciona ao final do array
//nomes.unshift("Carlos") // unshift adiciona no começo e shift retira do começo
//console.log(nomes)
//nomes.shift()
//console.log(nomes)
const novos = nomes
console.log(novos)
const fatia = novos.slice(0,3) // Primeiro número de onde começa e o último número é até onde vai, sendo ele não incluído na fatia
console.log(fatia)
const fatia2 = novos.slice(1,-3) // Número negativo indica a contagem de trás para frente, mais intuitivo 
console.log(fatia2)

// Split divide um array em uma (ou várias) string(s)
// Join junta um array em string
