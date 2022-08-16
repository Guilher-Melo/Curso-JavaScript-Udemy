//705.484.450-52

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x    Os 9 primeiros números
10 9  8  7  6  5  4  3  2     Multiplicado pela ordem decrescente
70 0 40 28 48 20 16 15  0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número dígito for maior que 9 consideramos 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x    Adiciona o novo número no final
11 10 9  8  7  6  5  4  3  2     Multiplicado pela ordem decrescente começando do 11
77 0 45 32 56 24 20 20  0  0 = 284

11 - (284 % 11) = 2 (Primeiro digito)
Se o número dígito for maior que 9 consideramos 0

*/

function Validacpf (cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfEnviado.replace(/\D+/g,'')
        }
    })
}

Validacpf.prototype.valida = function(){
    if (typeof this.cpfLimpo === undefined ) return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digitoUm = this.criaDigito(cpfParcial)
    let digitoDois = this.criaDigito(cpfParcial + digitoUm)

    const novoCPF = cpfParcial + digitoUm + digitoDois

    return novoCPF === this.cpfLimpo
}

Validacpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    

    let regressivo = cpfArray.length + 1
    let total = cpfArray.reduce(function(acumulador, valor){
        acumulador += (regressivo * Number(valor))
        regressivo --
        return acumulador
    }, 0)
     
    let digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

Validacpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new Validacpf('705.484.450-52')

if(cpf.valida()){
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}