class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    // Método de instância
    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }

    //Método estático (não tem acesso ao constructor)
    static soma (x, y){
        console.log(x + y)
    }
}

const controle = new ControleRemoto('philco')
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
console.log(controle)

ControleRemoto.soma(2,2)