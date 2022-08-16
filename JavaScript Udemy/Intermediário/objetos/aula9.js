// Poliformismo 
// Superclass
function Conta (agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insufuciente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const banco = new Conta(02, 12, 25)
banco.depositar(12)

function ContaCorrente (agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor> (this.saldo + this.limite)){
        console.log(`Saldo insufuciente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

let conta2 = new ContaCorrente(11, 22, 15, 150)
conta2.sacar(150)

