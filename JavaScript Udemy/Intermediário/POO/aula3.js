class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`)
            return
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`)
            return
        }

        this.ligado = false
    }
}

class Smarthphone extends DispositivoEletronico {  // Usando a herança da outra classe 
    constructor(nome, cor){
    super(nome) // É sempre necessário utilizar o super
    this.cor = cor
    }

}

const d1 = new DispositivoEletronico('Mouse')
d1.ligar()
console.log(d1)

const s1 = new Smarthphone ('Moto G', 'preto')
s1.ligar()
console.log(s1)