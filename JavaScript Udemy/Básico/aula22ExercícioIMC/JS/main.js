const form = document.getElementById('form')
function CalculaImc(){
let pegaPeso = document.getElementById("input-teste-1")
let valorPeso = Number(pegaPeso.value)
let pegaAlt = document.getElementById("input-teste-2")
let valorAlt = Number(pegaAlt.value)

let imc = valorPeso/valorAlt ** 2

let pegaResp = document.getElementById("resposta")

/*if (valorPeso === NaN || imc === NaN){
pegaResp.innerHTML = `Peso inválido`
} else if (valorAlt === NaN || imc === NaN){
    pegaResp.innerHTML = `Altura inválida`
}
console.log(valorPeso,valorAlt)
*/

if (imc<18.5){
    pegaResp.innerHTML = `Seu IMC é ${imc.toFixed(1)} - Abaixo do peso`
} else if (imc<=24.9){
    pegaResp.innerHTML = `Seu IMC é ${imc.toFixed(1)} - Peso normal`
} else if (imc<=29.9){
    pegaResp.innerHTML = `Seu IMC é ${imc.toFixed(1)} - Sobrepeso`
} else if (imc <= 34.9){
    pegaResp.innerHTML = `Seu IMC é ${imc.toFixed(1)} - Obesidade grau 1`
} else if (imc <= 39.9){
    pegaResp.innerHTML = `Seu IMC é ${imc.toFixed(1)} - Obesidade grau 2`
} else {
    pegaResp.innerHTML = `Seu IMC é ${imc.toFixed(1)} - Obesidade grau 3`
}



}
form.addEventListener('submit', function(e){
e.preventDefault()
})
