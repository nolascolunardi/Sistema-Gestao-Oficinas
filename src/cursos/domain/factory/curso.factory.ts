import {Curso} from "../curso";
import { uuid } from 'uuidv4';

export class CursoFactory {
    criar(titulo: string, descricao: string, dataInicio: string, dataFinal: string): Curso {
        const cursoId = uuid();
        const professores = ['José'];
        const alunos = [];
        return new Curso(cursoId, titulo, descricao, professores, alunos, dataInicio, dataFinal);
  }
}