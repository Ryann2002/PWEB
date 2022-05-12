function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return base*altura;
    }
}



const retangulo = new Retangulo(10,20);
alert(retangulo.calcularArea());


function Conta(correntista, banco, numero, saldo) {
    this.correntista = correntista;
    this.banco = banco;
    this.numero = numero;
    this.saldo = saldo;
}


function ContaCorrente() {
    this.saldoEspecial

    this.setSaldoEspecial = function (saldo) {
        this.saldoEspecial=saldo;
    }
}

ContaCorrente.prototype = new Conta("Ryan", "Nubank","1000",0);
const contaC = new ContaCorrente();
contaC.setSaldoEspecial(1000);

alert(`${contaC.correntista} ${contaC.saldoEspecial}`)

function ContaPoupanca(){
    this.dtVencimento;
    this.juros;

    this.setDtVen = function (dt) {
        this.dtVencimento = dt
    }

    this.setJuros = function (juros) {
        this.juros = juros;
    }
}


ContaPoupanca.prototype = new Conta("Ryan", "Nubank","1000",0);
const contaP = new ContaPoupanca();
contaP.setJuros(0.1);
contaP.setDtVen("15/01/2002");


alert(`${contaP.correntista} ${contaP.juros} ${contaP.dtVencimento}`)