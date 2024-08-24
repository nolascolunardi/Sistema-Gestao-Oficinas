import {Curso} from "../../domain/curso";

export abstract class CursoRepository {
    abstract salvar(curso: Curso): Curso ;
    abstract listar(): Curso[];
    abstract buscarPorTitulo(titulo: string): Curso;
    abstract buscarPorTurma(turma: string): Curso;
}