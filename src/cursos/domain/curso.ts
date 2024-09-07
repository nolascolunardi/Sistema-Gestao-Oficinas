export class Curso {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  professores: string[];
  alunos: string[];
  dataInicio: string;
  dataFinal: string;

  constructor(
    id: string,
    titulo: string,
    descricao: string,
    categoria: string,
    professores: string[],
    alunos: string[],
    dataInicio: string,
    dataFinal: string,
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.categoria = categoria;
    this.professores = professores;
    this.alunos = alunos;
    this.dataInicio = dataInicio;
    this.dataFinal = dataFinal;
  }
}
