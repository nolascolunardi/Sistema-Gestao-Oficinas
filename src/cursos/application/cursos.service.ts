import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from '../presenters/http/dto/create-curso.dto';
import {CursoFactory} from "../domain/factory/curso.factory";
import {CursoRepository} from "./ports/cursos.repository";

@Injectable()
export class CursosService {
  constructor(private readonly cursoRepository: CursoRepository, private readonly cursoFactory: CursoFactory) {}

  criarCursos(createCursoDto: CreateCursoDto) {
    if (!this.verificarCursoExistente(createCursoDto.titulo)) {
        throw new Error('Curso já cadastrado');
    }
    if(!this.verificarTurmaExistente(createCursoDto.turma)){
        throw new Error('Turma já cadastrada');
    }
    const curso = this.cursoFactory.criar(createCursoDto.titulo, createCursoDto.turma, createCursoDto.descricao, createCursoDto.categoria, createCursoDto.dataInicio, createCursoDto.dataFinal);
    return this.cursoRepository.salvar(curso);

  }

  verificarCursoExistente(titulo: string): boolean {
    const cursos = this.cursoRepository.listar();
    return !cursos.find((curso) => curso.titulo === titulo);
  }

  verificarTurmaExistente(turma: string): boolean {
      const cursos = this.cursoRepository.listar();
      return !cursos.find((curso) => curso.turma === turma);
  }

  listarCursos() {
    return this.cursoRepository.listar();
  }

}
