let num = 26
function check(n){
if (n%3 ===0 && n%5===0){
    return "FizzBuzz"
} else if (n%3===0){
 return "Fizz"
} else if (n%5===0){
    return "Buzz"
} else {
    return n
}
}

for (let i = 0; i<=100; i++){
console.log(i, check(i))
}