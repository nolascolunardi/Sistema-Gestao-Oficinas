import { randomUUID } from 'crypto';
import { Curso } from '../curso';
import { CriarCursoDto } from '../../presenters/http/dto/criar-curso.dto';

export class CursoFactory {
  criar(cursoDto: CriarCursoDto): Curso {
    const cursoId = randomUUID();
    const professores = ['Jackie'];
    const alunos = [];
    return new Curso(
      cursoId,
      cursoDto.titulo,
      cursoDto.descricao,
      cursoDto.categoria,
      professores,
      alunos,
      cursoDto.dataInicio,
      cursoDto.dataFinal,
    );
  }
}
