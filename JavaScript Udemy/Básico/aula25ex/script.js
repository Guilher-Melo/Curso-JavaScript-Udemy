
let data = new Date()
let diaSemana = data.getDay()

let dia = data.getDate()

let mes = data.getMonth()

let ano = data.getFullYear()

let hora = data.getHours()

let minutes = data.getMinutes()

const diaSemanaTexto = pegaData(diaSemana)

const mesTexto = pegaMes(mes)

let resposta = document.getElementById("texto")
resposta.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${zeroAEsquerda(minutes)}`

function pegaData(diaSemana){
let textoDiaSemana = ""
switch(diaSemana){
    case 0:
        textoDiaSemana = 'Domingo'
        return textoDiaSemana

    case 1:
        textoDiaSemana = 'Segunda-feira'
        return textoDiaSemana

    case 2:
        textoDiaSemana = 'Terça-feira'
        return textoDiaSemana

    case 3:
        textoDiaSemana = 'Quarta-feira'
        return textoDiaSemana
        
    case 4:
        textoDiaSemana = 'Quinta-feira'
        return textoDiaSemana

    case 5:
        textoDiaSemana = 'Sexta-feira'
        return textoDiaSemana

     case 6:
        textoDiaSemana = 'Sábado'
        return textoDiaSemana
    
    default:
        textoDiaSemana= ""
}
}

function pegaMes (mes){
    let textoMes = ""
    switch(mes){
        case 0:
            textoMes = "janeiro"
            return textoMes

        case 1:
            textoMes = "fevereiro"
            return textoMes

        case 2:
            textoMes = "março"
            return textoMes

        case 3:
            textoMes = "abril"
            return textoMes

        case 4:
            textoMes = "maio"
            return textoMes

        case 5:
            textoMes = "junho"
            return textoMes

        case 6:
            textoMes = "julho"
            return textoMes

        case 7:
            textoMes = "agosto"
            return textoMes

        case 8:
            textoMes = "setembro"
            return textoMes

        case 9:
            textoMes = "outubro"
            return textoMes

        case 10:
            textoMes = "novembro"
            return textoMes

        case 11:
            textoMes = "dezembro"
            return textoMes
    }
}
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}