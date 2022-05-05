const aluno1 = {
    nome: "Aluno",
    ra: "RA ALUNO",
};


function Aluno2(nome,ra) {
    this.nome = nome;
    this.ra = ra;
}

aluno2 = new Aluno2("Aluno",'RA ALUNO');

aluno3 = new Object();
aluno3.nome = "Aluno";
aluno3.ra = "RA ALUNO";


function logger(object) {
    var string = "";
    for (const key in object) {
        string += " " + key + ": " + object[key] + " ";
    }

    return string
}
alert(logger(aluno1));
alert(logger(aluno2));
alert(logger(aluno3));