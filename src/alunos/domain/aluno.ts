import {Curso} from "../../cursos/domain/curso";

export class Aluno {
  id: number;
  nome: string;
  RA: string; //registro de aluno
  endereco: string;
  telefone: string;
  email: string;
  cursos: string[];

  constructor(id: string, nome: string, RA: string,endereco: string, email: string, telefone: string, cursos: string[]) {
    this.nome = nome;
    this.RA = RA;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.cursos = cursos;
  }

  matricular(curso: Curso) {
      this.cursos.push(curso.turma);
  }
}
