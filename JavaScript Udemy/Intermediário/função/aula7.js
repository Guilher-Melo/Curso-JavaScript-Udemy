// Factory Function

function criaPessoa (nome, sobrenome, peso, altura){
    return{
        nome, 
        sobrenome,

        //getter - transforma função em método
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){ // valor = array
            valor = valor.split(" ") // separa o array
            this.nome = valor.shift() // retorna o primeiro valor e tira ele do array
            this.sobrenome = valor.join(' ') // retorna o final
        },

        fala(assunto = 'falando sobre NADA'){
            return `${this.nome} está ${assunto}.`
        },

        altura: altura,
        peso: peso,

        get imc(){
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Guilherme', 'Melo', 200, 1.60)
const p2 = criaPessoa('Maria', 'Fernanda', 55, 1.49)
console.log(p1.fala())
console.log(p2.nomeCompleto)