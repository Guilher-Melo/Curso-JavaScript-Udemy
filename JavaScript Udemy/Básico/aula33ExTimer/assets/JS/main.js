let relogio = document.querySelector('#relogio')
let iniciar = document.querySelector('#iniciar')
let pausar = document.querySelector('#pausar')
let zerar = document.querySelector('#zerar')



function timeSeconds(segundos){
    const data = new Date (segundos*1000)
    return data.toLocaleTimeString('pt-br', {hour12: false, timeZone: "GMT"})
}

let segundos = 0
let timer 

function iniciaSegundo(){
    relogio.classList.remove('pausado')
    clearInterval(timer)
     timer = setInterval(function(){
        segundos++
        relogio.innerHTML = timeSeconds(segundos)
    }, 1000)
}

function paraSegundo(){
    relogio.classList.add('pausado')
    setTimeout(function(){
        clearInterval(timer)
    }, 2)
}

function zeraRelogio(){
    relogio.classList.remove('pausado')
    relogio.innerHTML = timeSeconds(0)
    segundos = 0
}
