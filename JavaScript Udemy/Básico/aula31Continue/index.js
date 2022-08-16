const numeros =[1, 2, 3, 4, 5, 6, 7, 8, 9]

// continue = passa para a próxima iteração
// break = sai do laço

for (let i of numeros){

    if (i ===2){
        console.log("pulei o 2")
        continue
    }

    if (i===7){
        console.log("7 encontrado, saindo...")
        break
    }

    console.log(i)
} 