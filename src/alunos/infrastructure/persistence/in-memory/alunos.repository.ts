import { Injectable } from '@nestjs/common';
import { Aluno } from '../../../domain/aluno';
import {AlunoRepository} from "../../../application/ports/alunos.repository";
import {AlunosData} from "./alunos.data";

@Injectable()
export class InMemoryAlunosRepository extends AlunoRepository {
  private alunos: Aluno[];

  constructor(private dataClientes: AlunosData) {
    super();
    this.alunos = dataClientes.database;
  }
  salvar(aluno: Aluno): Aluno {
    this.alunos.push(aluno);
    return aluno;
  }

  listar(): Aluno[] {
    return this.alunos;
  }

  buscarPorEmail(email: string): Aluno {
      return this.alunos.find(aluno => aluno.email === email);
  }

  buscarPorRA(RA: string): Aluno {
      return this.alunos.find(aluno => aluno.RA === RA);
  }
}
