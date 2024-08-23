import { Injectable } from '@nestjs/common';
import { Aluno } from '../../../domain/aluno';
import {AlunoRepository} from "../../../application/ports/alunos.repository";

@Injectable()
export class InMemoryAlunosRepository extends AlunoRepository {
  private readonly alunos: Aluno[] = [];

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
}
