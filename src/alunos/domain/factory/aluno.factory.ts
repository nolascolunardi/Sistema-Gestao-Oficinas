import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Aluno } from '../aluno';

@Injectable()
export class AlunoFactory {
    criar(nome: string, RA: string, endereco: string, email: string, telefone: string) {
        const alunoId = uuid();
        const alunoCurso = [];
        return new Aluno(alunoId, nome, RA, endereco, email, telefone, alunoCurso);
    }
}