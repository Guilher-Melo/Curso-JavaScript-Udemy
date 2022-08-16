try{
    //É executado quando não há erros
} catch{
    // É executado quando acontece um erro
} finally{
    // Sempre é executado
}

try{
    console.log("Testando")
} catch(e){
    console.log("Deu ruim")
} finally{
    console.log("Tô sempre aqui")
}
