export class Aluno {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  cursos: string[];

  constructor(id: string, nome: string, endereco: string, telefone: string, email: string, cursos: string[]) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.cursos = cursos;
  }
}
