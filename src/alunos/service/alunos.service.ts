import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { AlunosRepository } from '../repository/alunos.repository';
import { Alunos } from '../entities/aluno.entity';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository) {}
  create(createAlunoDto: CreateAlunoDto) {
    const aluno = new Alunos(
      createAlunoDto.nome,
      createAlunoDto.endereco,
      createAlunoDto.telefone,
      createAlunoDto.email,
    );
    const listaAlunos = this.alunosRepository.getAll();
    const alunoExistente = listaAlunos.find(
      (aluno) => aluno.email === createAlunoDto.email,
    );
    if (alunoExistente) {
      throw new Error('Aluno já cadastrado');
    }
    this.alunosRepository.salvar(aluno);
    return;
  }
}
