const prompt = require('prompt-sync')();

class Aluno{
  constructor(nome, anoEscolar){
    this.nome = nome;
    this.anoEscolar = anoEscolar;
    
    this.notasPortugues = [];
    this.notasMatematica = [];
    
    this.mediaFinal = 0;
  }

  //adiciona uma nota na lista de notas da disciplina
  addNota(nota, disciplina){
    if (disciplina == "portugues"){
      this.notasPortugues.push(nota);
    }

    else if (disciplina == "matematica"){
      this.notasMatematica.push(nota);
    }

    else{
      console.log("Esta disciplina não existe.")
    }

    this.calcularMediaFinal();
  }

  //calcula a média de uma disciplina
  calcularMedia(disciplina){
    let notas;
    let soma = 0;

    //armazena as notas da disciplina escolhida na variável notas
    if (disciplina == "portugues"){
      notas = this.notasPortugues;
    }
  
    else if (disciplina == "matematica"){
      notas = this.notasMatematica;
    }
    
    //apresenta uma mensagem caso a disciplina não exista
    else {
      console.log("Disciplina não encontrada");
    }

    //caso não haja notas na lista, retorna 0
    if (notas.length == 0){
      return 0;
    }

    //calcula a média da disciplina e retorna
    else{
      for (let nota of notas){
        soma += nota;
      }

      return soma / notas.length;
    }
  }

  //calcula a média final
  calcularMediaFinal(){
    let mediaPortugues = this.calcularMedia("portugues");
    let mediaMatematica = this.calcularMedia("matematica");

    this.mediaFinal = (mediaPortugues + mediaMatematica) / 2;
  }

  //mostra o boletim do aluno
  boletim(){
    console.log(`
    ---- BOLETIM ----
    Nome: ${this.nome}
    Ano: ${this.anoEscolar}º ano

    Português
    Notas: ${this.notasPortugues}
    Média: ${this.calcularMedia("portugues").toFixed(1)}

    Matemática
    Notas: ${this.notasMatematica}
    Média: ${this.calcularMedia("matematica").toFixed(1)}

    Média final: ${this.mediaFinal.toFixed(1)}
    -------------
      `)
  }
}

const aluno1 = new Aluno("Marcelo", 3)
aluno1.addNota(8, "portugues");
aluno1.addNota(5, "portugues");
aluno1.addNota(9, "matematica");
aluno1.addNota(2, "matematica");

aluno1.boletim();