let frutas = ["maçã", "uva", "caju", "laranja", "melancia"]

for (let i in frutas){
    console.log(frutas[i])
}
//for in lê os índices ou chaves do objeto

let pessoa = {
    nome: "Gui", sobrenome: "Melo", idade: 20 
}
for (let key in pessoa){
    console.log(key, pessoa[key])
}