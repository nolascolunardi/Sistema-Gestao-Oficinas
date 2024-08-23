import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from '../presenters/http/dto/create-aluno.dto';
import { AlunoFactory } from '../domain/factory/aluno.factory';
import {AlunoRepository} from "./ports/alunos.repository";
import {Aluno} from "../domain/aluno";

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunoRepository, private readonly factoryAluno: AlunoFactory) {}
  criar(createAlunoDto: CreateAlunoDto): Aluno {

    this.validarEmail(createAlunoDto.email);

    const aluno = this.factoryAluno.criar(createAlunoDto.nome, createAlunoDto.endereco, createAlunoDto.email, createAlunoDto.telefone);
    return this.alunosRepository.salvar(aluno);
  }

  validarEmail(email: string): void {
    const listaAlunos = this.alunosRepository.listar();
    const alunoEncontrado = listaAlunos.find((aluno) => aluno.email === email);
    if (alunoEncontrado) {
      throw new Error('Email já cadastrado');
    }
  }

  listar(): Aluno[] {
    return this.alunosRepository.listar();
  }
}
