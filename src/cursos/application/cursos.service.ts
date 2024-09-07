import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CriarCursoDto } from '../presenters/http/dto/criar-curso.dto';
import { CursoFactory } from '../domain/factory/curso.factory';
import { CursoRepository } from './ports/cursos.repository';
import { Curso } from '../domain/curso';

@Injectable()
export class CursosService {
  constructor(
    private readonly cursoRepository: CursoRepository,
    private readonly cursoFactory: CursoFactory,
  ) {}

  criar(createCursoDto: CriarCursoDto) {
    this.verificarCursoExistente(createCursoDto.titulo);
    const curso = this.cursoFactory.criar(createCursoDto);
    return this.cursoRepository.salvar(curso);
  }

  verificarCursoExistente(titulo: string): void {
    const cursos = this.cursoRepository.listar();
    const curso = cursos.find((curso) => curso.titulo === titulo);
    if (curso) {
      throw new ForbiddenException('Curso já cadastrado');
    }
  }

  listarTodos() {
    return this.cursoRepository.listar();
  }

  async matricular(alunoRA: string, curso: Curso): Promise<Curso> {
    if (!this.buscarPorTitulo(curso.titulo)) {
      throw new NotFoundException('Curso não encontrado');
    }

    if (curso.alunos.length > 30) {
      throw new ForbiddenException('Vagas esgotadas');
    }

    return this.cursoRepository.matricularAluno(alunoRA, curso);
  }

  buscarPorTitulo(titulo: string): Curso {
    return this.cursoRepository.buscarPorTitulo(titulo);
  }
}
