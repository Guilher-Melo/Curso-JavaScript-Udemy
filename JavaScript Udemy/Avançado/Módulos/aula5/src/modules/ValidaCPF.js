export default class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            get: function(){
                return cpfEnviado.replace(/\D+/g,'') 
            }
        })
    }

    valida(){
    if (typeof this.cpfLimpo === undefined ) return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digitoUm = this.criaDigito(cpfParcial)
    let digitoDois = this.criaDigito(cpfParcial + digitoUm)

    const novoCPF = cpfParcial + digitoUm + digitoDois

    return novoCPF === this.cpfLimpo
    }

    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)

        let regressivo = cpfArray.length + 1
        let total = cpfArray.reduce(function(acumulador, valor){
            acumulador += (regressivo * Number(valor))
            regressivo --
            return acumulador
        }, 0)

        let digito = 11 - (total % 11)
        console.log
        return digito > 9 ? '0' : String(digito)
    }

    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
}

/*const cpf = new ValidaCPF('705.484.450-52')

if (cpf.valida()){
    console.log('CPF Válido')
} else{
    console.log('CPF Inválido')
}*/