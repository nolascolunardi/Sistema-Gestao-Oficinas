import {Curso} from "../curso";
import { uuid } from 'uuidv4';

export class CursoFactory {
    criar(titulo: string, turma: string, descricao: string, categoria: string, dataInicio: string, dataFinal: string): Curso {
        const cursoId = uuid();
        const professores = ['Jackie'];
        const alunos = [];
        return new Curso(cursoId, titulo, turma, descricao, categoria, professores, alunos, dataInicio, dataFinal);
  }
}