import {Curso} from "../../domain/curso";

export abstract class CursoRepository {
    abstract salvar(curso: Curso): Curso ;
    abstract listar(): Curso[];
}