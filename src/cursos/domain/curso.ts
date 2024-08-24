import {Aluno} from "../../alunos/domain/aluno";

export class Curso {
    id: string;
    titulo: string;
    turma: string;
    descricao: string;
    categoria: string;
    professores: string[];
    alunos: string[];
    dataInicio: string;
    dataFinal: string;

    constructor(id: string, titulo: string, turma: string, descricao: string, categoria: string, professores: string[], alunos: string[], dataInicio: string, dataFinal: string) {
        this.id = id;
        this.titulo = titulo;
        this.turma = turma;
        this.descricao = descricao;
        this.categoria = categoria;
        this.professores = professores;
        this.alunos = alunos;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
    }

    matricular(aluno: Aluno) {
        this.alunos.push(aluno.RA);
    }

}
