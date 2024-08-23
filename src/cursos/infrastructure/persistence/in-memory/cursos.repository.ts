import {CursoRepository} from "../../../application/ports/cursos.repository";
import {Curso} from "../../../domain/curso";

export class InMemoryCursosRepository extends CursoRepository {
    private readonly cursos: Curso[] = [];

    salvar(curso: Curso): Curso {
        this.cursos.push(curso);
        return curso;
    }

    listar(): Curso[] {
        return this.cursos;
    }
}