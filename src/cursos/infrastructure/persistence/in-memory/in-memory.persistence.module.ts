import {Module} from "@nestjs/common";
import {CursoRepository} from "../../../application/ports/cursos.repository";
import {InMemoryCursosRepository} from "./cursos.repository";
import {CursosData} from "./cursos.data";

@Module({
    providers: [
        {
            provide: CursoRepository,
            useClass: InMemoryCursosRepository
        }, CursosData
    ],
    exports: [CursoRepository],
})

export class InMemoryCursosPersistenceModule {}