import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from '../presenters/http/dto/create-curso.dto';
import {CursoFactory} from "../domain/factory/curso.factory";
import {CursoRepository} from "./ports/cursos.repository";

@Injectable()
export class CursosService {
  constructor(private readonly cursoRepository: CursoRepository, private readonly cursoFactory: CursoFactory) {
  }
  criarCursos(createCursoDto: CreateCursoDto) {
    const curso = this.cursoFactory.criar(createCursoDto.titulo, createCursoDto.descricao, createCursoDto.dataInicio, createCursoDto.dataFinal);
    return this.cursoRepository.salvar(curso);
  }

  listarCursos() {
    return `This action returns all cursos`;
  }
}
