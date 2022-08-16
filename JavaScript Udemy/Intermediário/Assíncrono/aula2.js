// Métodos promise

function rand(min, max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
       if(typeof msg !== "string") reject (false)

       setTimeout(()=> {
        resolve(msg)
       }, tempo)
    } )   
}


// Métodos da aula: Promise.all; Promise.race; Promise.resolve Promise.reject

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 600),
    esperaAi('Promise 3', 2000),
]

//Promise.all(promises).then(function(valor){     // Retorna todos os valores
//    console.log(valor)
//}).catch(function(erro){
//    console.log(erro)
//})


//Promise.race(promises).then(function(valor){     // Retorna o primeiro valor resolvido (nesse caso o com o menor tempo)
//       console.log(valor)
//    }).catch(function(erro){
//        console.log(erro)
//    })

function baixaPagina(){
    const emCache = true

    if(emCache){
        return Promise.resolve('Página em cache')  // Resolve cai no then; Reject cai no catch
    } else {
        return esperaAi('baixei a página', 3000)
    }
}

baixaPagina().then(
dadoPagina => {
    console.log(dadoPagina)
}
).catch(
    e => console.log(e)
)