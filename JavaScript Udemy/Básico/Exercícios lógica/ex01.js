let num1 = parseInt(Math.random() * (100-1) + 1)
let num2 = parseInt(Math.random() * (100-1) +1)

console.log(num1,num2)

function maiorValor(num1,num2){
if (num1>num2){
    return num1
} 
else{
    return num2
}
}
console.log(maiorValor(num1,num2))


