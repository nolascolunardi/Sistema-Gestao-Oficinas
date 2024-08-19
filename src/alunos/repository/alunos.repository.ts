import { Injectable } from '@nestjs/common';
import { Alunos } from '../entities/aluno.entity';

@Injectable()
export class AlunosRepository {
  private readonly alunos: Alunos[] = [];

  salvar(aluno: Alunos): void {
    this.alunos.push(aluno);
  }

  getAll(): Alunos[] {
    return this.alunos;
  }
}
