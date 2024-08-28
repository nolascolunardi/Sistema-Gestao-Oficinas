import {Injectable} from "@nestjs/common";
import {CursoRepository} from "../../../application/ports/cursos.repository";
import {Curso} from "../../../domain/curso";
import {CursosData} from "./cursos.data";

@Injectable()
export class InMemoryCursosRepository extends CursoRepository {
    private readonly cursos: Curso[];

    constructor(dataCursos: CursosData) {
        super();
        this.cursos = dataCursos.database;
    }

    salvar(curso: Curso): Curso {
        this.cursos.push(curso);
        return curso;
    }

    listar(): Curso[] {
        return this.cursos;
    }

    buscarPorTitulo(titulo: string): Curso {
        return this.cursos.find(curso => curso.titulo === titulo);
    }

    buscarPorTurma(turma: string): Curso {
        return this.cursos.find(curso => curso.turma === turma);
    }
}