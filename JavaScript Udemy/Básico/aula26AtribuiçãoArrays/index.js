// ... rest, ... spread
let numeros = [100, 200, 300, 400, 500, 600]
let [um, dois, tres, ... resto] = numeros

console.log(um, dois, tres)
console.log (resto)

let numeros2 = [1000, 2000, 3000, 4000, 5000]
let [prim, , terc, , ... rest] = numeros2
console.log(numeros2)
console.log (prim,terc)
console.log(rest)
