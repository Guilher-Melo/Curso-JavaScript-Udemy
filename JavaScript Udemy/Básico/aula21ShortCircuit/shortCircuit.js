/* Falsy
False
0
null
undefined
NaN
*/
console.log(null || undefined || 0 || "Guilherme") // Retorna o primeiro valor verdadeiro 
let corEscolhida = null
let corPadrao = corEscolhida || "Red" // Retorna o que for verdadeiro
console.log(corPadrao)