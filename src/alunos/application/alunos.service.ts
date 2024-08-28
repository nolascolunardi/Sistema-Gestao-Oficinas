import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from '../presenters/http/dto/create-aluno.dto';
import { AlunoFactory } from '../domain/factory/aluno.factory';
import {AlunoRepository} from "./ports/alunos.repository";
import {Aluno} from "../domain/aluno";
import {MatricularAlunoDto} from "../presenters/http/dto/matricular-aluno.dto";
import {CursoRepository} from "../../cursos/application/ports/cursos.repository";
import {Curso} from "../../cursos/domain/curso";

@Injectable()
export class AlunosService {
  constructor(
      private readonly alunosRepository: AlunoRepository,
      private readonly cursosRepository: CursoRepository,
      private readonly factoryAluno: AlunoFactory
  ) {}

  async criar(createAlunoDto: CreateAlunoDto): Promise<Aluno> {

    if (!this.validarEmail(createAlunoDto.email)) {
      throw new Error('Email já cadastrado.');
    }

    if(!this.validarRA(createAlunoDto.RA)){
        throw new Error('RA já cadastrado.');
    }

    const aluno = this.factoryAluno.criar(createAlunoDto.nome, createAlunoDto.RA, createAlunoDto.endereco, createAlunoDto.email, createAlunoDto.telefone);
    return this.alunosRepository.salvar(aluno);
  }

  validarEmail(email: string): boolean {
    return !this.alunosRepository.buscarPorEmail(email);
  }

  validarRA(RA: string): boolean {
    return !this.alunosRepository.buscarPorRA(RA);
  }
  listar(): Aluno[] {
    return this.alunosRepository.listar();
  }

  async matricular(matricularDto: MatricularAlunoDto): Promise<Aluno> {
    const aluno = this.alunosRepository.buscarPorRA(matricularDto.alunoRA);
    const curso = this.cursosRepository.buscarPorTurma(matricularDto.cursoTurma);
    if (!aluno) {
      throw new Error('Aluno não encontrado.');
    }

    if (!curso ) {
      throw new Error('Curso não encontrado.');
    }

    if (!this.validarMatricula(aluno, curso)) {
        throw new Error('Aluno já matriculado no curso.');
    }

    aluno.matricular(curso);
    curso.matricular(aluno);
    return aluno;

  }

  validarMatricula(aluno: Aluno, curso: Curso): boolean {
    return !aluno.cursos.includes(curso.titulo);
  }
}

